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

**参考链接**
- https://segmentfault.com/a/1190000039023480?utm_source=sf-similar-article
- https://forums.raspberrypi.com/viewtopic.php?p=2146820


## 服务自启动
### SYSTEMD 配置
1. 创建`/lib/systemd/system/`目录，并在其中创建`xxx.service`文件，内容如下：
```
[Unit]
Description=xxx
After=network.target      # 需要等待网络服务启动
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