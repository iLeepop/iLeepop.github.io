# Raspberry Pi
树莓派相关设置

## Bookworm
其中一个发行版？我不懂
### 自定义开机Logo
**相关软件**
- plymouth

**相关命令**
- `sudo plymouth-set-default-theme [args]`

**前景提要**
1. `plymouth`管理了很多的主题，详细主题目录可以在`/usr/share/plymouth/themes`下找到
2. 查看自己的主题是什么，默认是`pix`，不了解的可以在文件`/etc/plymouth/plymouthd.conf`中配置。可以在`/usr/share/plymouth/plymouthd.defaults`中看到默认值
3. 确定好屏幕的分辨率，使用`fbset`命令查看
4. 准备一张和分辨率一样的图片，格式为`png`

**步骤**
1. 取消开机时的树莓派彩红屏检测
  - `sudo nano /boot/config.txt`
  - 添加`disable_splash=1`
2. 删除启动屏幕下方的单线
  - `sudo nano /usr/share/plymouth/themes/pix/pix.script`，注意本人是`pix`主题，其他主题可能不一样。
  - 注释以下几行代码：(行前加 `#`)
    - `message_sprite = Sprite();`
    - `message_sprite.SetPosition(screen_width * 0.1, screen_height * 0.9, 10000);`
    - `my_image = Image.Text(text, 1, 1, 1);`
    - `message_sprite.SetImage(my_image);`
3. 修改 `cmdline.txt`
  - `sudo nano /boot/cmdline.txt`，有可能提示已经移动到`firmware`目录下，运行`sudo nano /boot/firmware/cmdline.txt`
  - 行尾追加以下内容：
   - `logo.nologo`
   - `consoleblank=1`
   - `loglevel=0`
   - `vt.global_cursor_default=0`
4. 上传你的`Logo`
  - `scp xxx.png pi@xxx.xxx.xxx.xxx:/home/user/`
  - 使用上传的文件替换`/usr/share/plymouth/themes/pix/splash.png`
5. 进行到这一步，执行`reboot`重启，对于大部分设备已经成功了
6. 对于部分`bookworm`设备，会出现，关机时正常显示设置的`Logo`，开机却不行，依旧显示`Welcome to Raspberry Pi`图片，此时需要执行`sudo plymouth-set-default-theme --rebuild-initrd pix`
7. 消除鼠标`sudo nano /etc/lightdm/lightdm.conf`，修改`xserver-command=X -nocursor -s 0 dpms`

**参考链接**
- https://segmentfault.com/a/1190000039023480?utm_source=sf-similar-article
- https://forums.raspberrypi.com/viewtopic.php?p=2146820


## 服务自启动
### SYSTEMD 配置
1. 创建`/lib/systemd/system/`目录，并在其中创建`xxx.service`文件，样例如下：
```
[Unit]
Description=xxx
After=network.target          # 需要等待网络服务启动
Requires=redis-server.service # 需要等待redis服务启动
[Service]
Type=simple
ExecStart=/usr/bin/xxx
Restart=always
[Install]
WantedBy=multi-user.target
```
2. 执行`systemctl enable xxx.service`
3. 执行`systemctl start xxx.service`
4. 执行`systemctl status xxx.service`查看状态
5. 执行`systemctl stop xxx.service`停止服务
6. 执行`systemctl restart xxx.service`重启服务
7. 执行`systemctl daemon-reload`重新加载配置文件
8. 执行`systemctl list-units --type service`查看所有服务
9. 执行`systemctl is-enabled xxx.service`查看服务是否开机启动
10. 执行`systemctl enable xxx.service`将服务设置为开机启动
11. 执行`systemctl disable xxx.service`将服务设置为不开机启动

### init.d 目录配置
1. 将脚本文件移动到`/etc/init.d`目录下
2. 执行`chmod +x xxx.sh`给脚本文件添加执行权限
3. 执行`update-rc.d xxx.sh defaults`将脚本文件添加到开机启动项中
4. 执行`update-rc.d -f xxx.sh remove`将脚本文件从开机启动项中移除
脚本文件需要添加启动配置信息，另外`init.d`脚本可以设置启动顺序。

### .bashrc 配置
1. 修改`/home/pi/.bashrc`, 在文件末尾添加命令文本

### rc.local 配置
1. 在`/etc/rc.local`加入想要启动的服务的启动命令，注意要在最后一行加上`exit 0`

## "kiosk mode" application
就是类似于大厅服务台那种，就只能使用特定应用的服务，没有其它任何东西。
再直白点就是，系统开启就只跑一个全屏应用以及其相应的服务。

### 所需依赖
- `xorg`
- `openbox`
- `lightdm`
***`openbox`就是窗口管理器(Window Manager)，`lightdm`就是显示管理器(Display Manager)。***

### 配置
1. 启用自动登录
  - `sudo nano /etc/lightdm/lightdm.conf`
  - 找到`[SeatDefault]`或`[Seat:*]`
  - 添加`autologin-user=pi` 配置项
  - 添加`user-session=openbox` 配置项
  - 可选（消除鼠标光标）添加`xserver-command=X -nocursor -s 0 dpms` 配置项

2. 添加自启动应用
  - `touch ~/.config/openbox/autostart`
  - `sudo nano ~/.config/openbox/autostart`
  - 添加应用启动命令

3. 开启树莓派桌面启动模式
  - `sudo raspi-config`
  - 选择`System Option` -> `Boot Behavior` -> `Desktop AutoLOGIN`
  - 左右键选择`finish`

重启查看效果

## pyqt-vlc

### 主线：运行 PyQt 开机自启
```bash
# 发送代码
scp xxx.zip pi@xxx.xxx.xxx.xxx:./

# 配置 lightdm
sudo nano /etc/lightdm/lightdm.conf
# 取消掉注释并配置以下选项
user-session=openbox
autologin-user=pi

# 创建 openbox 配置文件夹
mkdir /home/pi/.config/openbox
nano /home/pi/.config/openbox/autostart    # 在 autostart 中添加自己想要的命令行 必须以 & 结尾
```

可以使用 RPi 连接一个显示屏，SSH 远程连接 RPi，使用：
```bash
export DISPLAY=:0 && [your command]
```

**注意，必须添加 `export DISPLAY=:0` 否则 python 不知道向哪里输出图形**
**其它命令或可执行文件，按情况使用**

### 支线：检查前置工具
***系统使用 bullseye 64bit lite***
```bash
python --version
# 设置 apt 源
sudo nano /etc/apt/sources.list
# 更新 apt
sudo apt update
# 安装 python3.9 有的没有 python3.9 必须源码安装 比较麻烦 尽量选择合适的系统版本
sudo apt install python3.9
# 切换当前 python
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 1
sudo update-alternatives --config python3
# 检查是否更新完毕
python --version
# or
python3 --version

# 安装 pip
sudo apt install python3-pip

# 配置 pip 源 有可能会失效 如若失效 自行搜索
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
pip config set install.trusted-host pypi.tuna.tsinghua.edu.cn

# 安装 pyqt5
sudo apt install python3-pyqt5   # 这里因为该系统版本预装了 pyqt5

# 安装 vlc
pip install python-vlc
sudo apt install vlc

# 安装必要工具
sudo apt install xorg lightdm openbox
```

### 支线：修改系统可以显示中文
```bash
# 安装 locales 工具
sudo apt install locales

# 配置语言环境
sudo dpkg-reconfigure locales
# 会弹出新界面， 上下键 以及 PageDown 和 PageUp 可以进行翻页，选择 zh_CN UTF8（根据个人情况选择）
# 按空格选中，会出现星号标记， Enter 确认
# 然后一路选择你要的语言首选项，最后重启登录

# 这时候还不能显示中文字体
# 安装中文字体包
sudo apt-get install ttf-wqy-zenhei

# 选装---输入法
sudo apt-get install scim-pinyin

# 配置 和上述一样
sudo raspi-config
# 重启
```

### 支线：设置静态 IP 地址
```bash
# 打开树莓派设置
sudo raspi-config

# 将网络管理器切换为 Network Manager

# 检查网络接口
ip link

# 编辑网络接口信息
sudo nano /etc/network/interfaces

# 根据下述内容修改后重新启动网络服务
sudo systemctl restart NetworkManager.service

# 查看 IP
ip a
```

修改内容为
```
#
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
```
