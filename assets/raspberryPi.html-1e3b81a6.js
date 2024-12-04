import{_ as n,o as e,c as s,a}from"./app-5539d687.js";const i={},l=a(`<h1 id="raspberry-pi" tabindex="-1"><a class="header-anchor" href="#raspberry-pi" aria-hidden="true">#</a> Raspberry Pi</h1><p>树莓派相关设置</p><h2 id="bookworm" tabindex="-1"><a class="header-anchor" href="#bookworm" aria-hidden="true">#</a> Bookworm</h2><p>其中一个发行版？我不懂</p><h3 id="自定义开机logo" tabindex="-1"><a class="header-anchor" href="#自定义开机logo" aria-hidden="true">#</a> 自定义开机Logo</h3><p><strong>相关软件</strong></p><ul><li>plymouth</li></ul><p><strong>相关命令</strong></p><ul><li><code>sudo plymouth-set-default-theme [args]</code></li></ul><p><strong>前景提要</strong></p><ol><li><code>plymouth</code>管理了很多的主题，详细主题目录可以在<code>/usr/share/plymouth/themes</code>下找到</li><li>查看自己的主题是什么，默认是<code>pix</code>，不了解的可以在文件<code>/etc/plymouth/plymouthd.conf</code>中配置。可以在<code>/usr/share/plymouth/plymouthd.defaults</code>中看到默认值</li><li>确定好屏幕的分辨率，使用<code>fbset</code>命令查看</li><li>准备一张和分辨率一样的图片，格式为<code>png</code></li></ol><p><strong>步骤</strong></p><ol><li>取消开机时的树莓派彩红屏检测</li></ol><ul><li><code>sudo nano /boot/config.txt</code></li><li>添加<code>disable_splash=1</code></li></ul><ol start="2"><li>删除启动屏幕下方的单线</li></ol><ul><li><code>sudo nano /usr/share/plymouth/themes/pix/pix.script</code>，注意本人是<code>pix</code>主题，其他主题可能不一样。</li><li>注释以下几行代码：(行前加 <code>#</code>) <ul><li><code>message_sprite = Sprite();</code></li><li><code>message_sprite.SetPosition(screen_width * 0.1, screen_height * 0.9, 10000);</code></li><li><code>my_image = Image.Text(text, 1, 1, 1);</code></li><li><code>message_sprite.SetImage(my_image);</code></li></ul></li></ul><ol start="3"><li>修改 <code>cmdline.txt</code></li></ol><ul><li><code>sudo nano /boot/cmdline.txt</code>，有可能提示已经移动到<code>firmware</code>目录下，运行<code>sudo nano /boot/firmware/cmdline.txt</code></li><li>行尾追加以下内容：</li><li><code>logo.nologo</code></li><li><code>consoleblank=1</code></li><li><code>loglevel=0</code></li><li><code>vt.global_cursor_default=0</code></li></ul><ol start="4"><li>上传你的<code>Logo</code></li></ol><ul><li><code>scp xxx.png pi@xxx.xxx.xxx.xxx:/home/user/</code></li><li>使用上传的文件替换<code>/usr/share/plymouth/themes/pix/splash.png</code></li></ul><ol start="5"><li>进行到这一步，执行<code>reboot</code>重启，对于大部分设备已经成功了</li><li>对于部分<code>bookworm</code>设备，会出现，关机时正常显示设置的<code>Logo</code>，开机却不行，依旧显示<code>Welcome to Raspberry Pi</code>图片，此时需要执行<code>sudo plymouth-set-default-theme --rebuild-initrd pix</code></li><li>消除鼠标<code>sudo nano /etc/lightdm/lightdm.conf</code>，修改<code>xserver-command=X -nocursor -s 0 dpms</code></li></ol><p><strong>参考链接</strong></p><ul><li>https://segmentfault.com/a/1190000039023480?utm_source=sf-similar-article</li><li>https://forums.raspberrypi.com/viewtopic.php?p=2146820</li></ul><h2 id="服务自启动" tabindex="-1"><a class="header-anchor" href="#服务自启动" aria-hidden="true">#</a> 服务自启动</h2><h3 id="systemd-配置" tabindex="-1"><a class="header-anchor" href="#systemd-配置" aria-hidden="true">#</a> SYSTEMD 配置</h3><ol><li>创建<code>/lib/systemd/system/</code>目录，并在其中创建<code>xxx.service</code>文件，样例如下：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=xxx
After=network.target          # 需要等待网络服务启动
Requires=redis-server.service # 需要等待redis服务启动
[Service]
Type=simple
ExecStart=/usr/bin/xxx
Restart=always
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>执行<code>systemctl enable xxx.service</code></li><li>执行<code>systemctl start xxx.service</code></li><li>执行<code>systemctl status xxx.service</code>查看状态</li><li>执行<code>systemctl stop xxx.service</code>停止服务</li><li>执行<code>systemctl restart xxx.service</code>重启服务</li><li>执行<code>systemctl daemon-reload</code>重新加载配置文件</li><li>执行<code>systemctl list-units --type service</code>查看所有服务</li><li>执行<code>systemctl is-enabled xxx.service</code>查看服务是否开机启动</li><li>执行<code>systemctl enable xxx.service</code>将服务设置为开机启动</li><li>执行<code>systemctl disable xxx.service</code>将服务设置为不开机启动</li></ol><h3 id="init-d-目录配置" tabindex="-1"><a class="header-anchor" href="#init-d-目录配置" aria-hidden="true">#</a> init.d 目录配置</h3><ol><li>将脚本文件移动到<code>/etc/init.d</code>目录下</li><li>执行<code>chmod +x xxx.sh</code>给脚本文件添加执行权限</li><li>执行<code>update-rc.d xxx.sh defaults</code>将脚本文件添加到开机启动项中</li><li>执行<code>update-rc.d -f xxx.sh remove</code>将脚本文件从开机启动项中移除 脚本文件需要添加启动配置信息，另外<code>init.d</code>脚本可以设置启动顺序。</li></ol><h3 id="bashrc-配置" tabindex="-1"><a class="header-anchor" href="#bashrc-配置" aria-hidden="true">#</a> .bashrc 配置</h3><ol><li>修改<code>/home/pi/.bashrc</code>, 在文件末尾添加命令文本</li></ol><h3 id="rc-local-配置" tabindex="-1"><a class="header-anchor" href="#rc-local-配置" aria-hidden="true">#</a> rc.local 配置</h3><ol><li>在<code>/etc/rc.local</code>加入想要启动的服务的启动命令，注意要在最后一行加上<code>exit 0</code></li></ol><h2 id="kiosk-mode-application" tabindex="-1"><a class="header-anchor" href="#kiosk-mode-application" aria-hidden="true">#</a> &quot;kiosk mode&quot; application</h2><p>就是类似于大厅服务台那种，就只能使用特定应用的服务，没有其它任何东西。 再直白点就是，系统开启就只跑一个全屏应用以及其相应的服务。</p><h3 id="所需依赖" tabindex="-1"><a class="header-anchor" href="#所需依赖" aria-hidden="true">#</a> 所需依赖</h3><ul><li><code>xorg</code></li><li><code>openbox</code></li><li><code>lightdm</code><em><strong><code>openbox</code>就是窗口管理器(Window Manager)，<code>lightdm</code>就是显示管理器(Display Manager)。</strong></em></li></ul><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><ol><li>启用自动登录</li></ol><ul><li><code>sudo nano /etc/lightdm/lightdm.conf</code></li><li>找到<code>[SeatDefault]</code>或<code>[Seat:*]</code></li><li>添加<code>autologin-user=pi</code> 配置项</li><li>添加<code>user-session=openbox</code> 配置项</li><li>可选（消除鼠标光标）添加<code>xserver-command=X -nocursor -s 0 dpms</code> 配置项</li></ul><ol start="2"><li>添加自启动应用</li></ol><ul><li><code>touch ~/.config/openbox/autostart</code></li><li><code>sudo nano ~/.config/openbox/autostart</code></li><li>添加应用启动命令</li></ul><ol start="3"><li>开启树莓派桌面启动模式</li></ol><ul><li><code>sudo raspi-config</code></li><li>选择<code>System Option</code> -&gt; <code>Boot Behavior</code> -&gt; <code>Desktop AutoLOGIN</code></li><li>左右键选择<code>finish</code></li></ul><p>重启查看效果</p><h2 id="pyqt-vlc" tabindex="-1"><a class="header-anchor" href="#pyqt-vlc" aria-hidden="true">#</a> pyqt-vlc</h2><h3 id="主线-运行-pyqt-开机自启" tabindex="-1"><a class="header-anchor" href="#主线-运行-pyqt-开机自启" aria-hidden="true">#</a> 主线：运行 PyQt 开机自启</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 发送代码</span>
<span class="token function">scp</span> xxx.zip pi@xxx.xxx.xxx.xxx:./

<span class="token comment"># 配置 lightdm</span>
<span class="token function">sudo</span> <span class="token function">nano</span> /etc/lightdm/lightdm.conf
<span class="token comment"># 取消掉注释并配置以下选项</span>
user-session<span class="token operator">=</span>openbox
autologin-user<span class="token operator">=</span>pi

<span class="token comment"># 创建 openbox 配置文件夹</span>
<span class="token function">mkdir</span> /home/pi/.config/openbox
<span class="token function">nano</span> /home/pi/.config/openbox/autostart    <span class="token comment"># 在 autostart 中添加自己想要的命令行 必须以 &amp; 结尾</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 RPi 连接一个显示屏，SSH 远程连接 RPi，使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">DISPLAY</span></span><span class="token operator">=</span>:0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span>your command<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意，必须添加 <code>export DISPLAY=:0</code> 否则 python 不知道向哪里输出图形</strong><strong>其它命令或可执行文件，按情况使用</strong></p><h3 id="支线-检查前置工具" tabindex="-1"><a class="header-anchor" href="#支线-检查前置工具" aria-hidden="true">#</a> 支线：检查前置工具</h3><p><em><strong>系统使用 bullseye 64bit lite</strong></em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">--version</span>
<span class="token comment"># 设置 apt 源</span>
<span class="token function">sudo</span> <span class="token function">nano</span> /etc/apt/sources.list
<span class="token comment"># 更新 apt</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token comment"># 安装 python3.9 有的没有 python3.9 必须源码安装 比较麻烦 尽量选择合适的系统版本</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3.9
<span class="token comment"># 切换当前 python</span>
<span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--install</span> /usr/bin/python3 python3 /usr/bin/python3.9 <span class="token number">1</span>
<span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--config</span> python3
<span class="token comment"># 检查是否更新完毕</span>
python <span class="token parameter variable">--version</span>
<span class="token comment"># or</span>
python3 <span class="token parameter variable">--version</span>

<span class="token comment"># 安装 pip</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3-pip

<span class="token comment"># 配置 pip 源 有可能会失效 如若失效 自行搜索</span>
pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
pip config <span class="token builtin class-name">set</span> install.trusted-host pypi.tuna.tsinghua.edu.cn

<span class="token comment"># 安装 pyqt5</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3-pyqt5   <span class="token comment"># 这里因为该系统版本预装了 pyqt5</span>

<span class="token comment"># 安装 vlc</span>
pip <span class="token function">install</span> python-vlc
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> vlc

<span class="token comment"># 安装必要工具</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> xorg lightdm openbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支线-修改系统可以显示中文" tabindex="-1"><a class="header-anchor" href="#支线-修改系统可以显示中文" aria-hidden="true">#</a> 支线：修改系统可以显示中文</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 locales 工具</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> locales

<span class="token comment"># 配置语言环境</span>
<span class="token function">sudo</span> dpkg-reconfigure locales
<span class="token comment"># 会弹出新界面， 上下键 以及 PageDown 和 PageUp 可以进行翻页，选择 zh_CN UTF8（根据个人情况选择）</span>
<span class="token comment"># 按空格选中，会出现星号标记， Enter 确认</span>
<span class="token comment"># 然后一路选择你要的语言首选项，最后重启登录</span>

<span class="token comment"># 这时候还不能显示中文字体</span>
<span class="token comment"># 安装中文字体包</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ttf-wqy-zenhei

<span class="token comment"># 选装---输入法</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> scim-pinyin

<span class="token comment"># 配置 和上述一样</span>
<span class="token function">sudo</span> raspi-config
<span class="token comment"># 重启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支线-设置静态-ip-地址" tabindex="-1"><a class="header-anchor" href="#支线-设置静态-ip-地址" aria-hidden="true">#</a> 支线：设置静态 IP 地址</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开树莓派设置</span>
<span class="token function">sudo</span> raspi-config

<span class="token comment"># 将网络管理器切换为 Network Manager</span>

<span class="token comment"># 检查网络接口</span>
<span class="token function">ip</span> <span class="token function">link</span>

<span class="token comment"># 编辑网络接口信息</span>
<span class="token function">sudo</span> <span class="token function">nano</span> /etc/network/interfaces

<span class="token comment"># 根据下述内容修改后重新启动网络服务</span>
<span class="token function">sudo</span> systemctl restart NetworkManager.service

<span class="token comment"># 查看 IP</span>
<span class="token function">ip</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改内容为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#
auto lo
iface lo inet loopback
# 设置你的网口（这里为作者的网口名称
auto eth0
iface eth0 inet static
address 192.168.1.7
netmask 255.255.255.0
gateway 192.168.1.1
# 这里的 dns 看个人需求修改
dns-nameservers 192.168.1.1 8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),o=[l];function c(d,t){return e(),s("div",null,o)}const p=n(i,[["render",c],["__file","raspberryPi.html.vue"]]);export{p as default};
