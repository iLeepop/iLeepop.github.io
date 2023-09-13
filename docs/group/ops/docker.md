---
lang: zh-CN
title: Docker
description: Docker Description
siderbar: "auto"
sidebarDepth: 3
---

# Docker

## 简介

## 用途

## Docker 系统架构

## Docker 引擎架构

### 安装

### 启停命令

### 卸载

## 镜像

### 简介

### 镜像仓库

### 自动化镜像

### 镜像分层

### 镜像文件系统

### 镜像摘要

## 容器

### 基础

容器的存在意义就是为了其中的应用提供运行环境，容器运行就是为了运行其中的应用，让其中的应用对外提供服务。容器内应用运行完毕后，容器就会自动终止。

### 容器创建并启动

[docker run](#run-命令)用于创建并启动容器，同时会运行容器中指定的应用。这个指定的应用要么通过[docker run](#run-命令)中的[command]指定，要么通过容器的 Dockerfile 中的 CMD 指令指定。

容器两种启动模式：交互模式 -it，分离模式 -d。

### 容器启动流程与容器启动本质

### 容器创建

[docker create](#create-命令)命令仅用于创建一个容器，并不会启动容器。该命令没有-d 选项，因为[docker create](#create-命令)创建的容器默认都是以后台方式来运行的(必须通过[docker start](#start-命令) [容器]来启动)，除非在创建时指定 -it。

### 容器退出

- exit：退出并终止当进程。
- ctrl+p+q：退出但不终止当前进程。

### 容器状态查看

[docker ps](#ps-命令)命令中 -a, -q, -l, -n。

### 容器再进

[docker exec](#exec-命令)与[docker attach](#attach-命令)的区别与联系

[docker exec](#exec-命令)会创建一个新进程来访问进程，一般与 -it 选项联用，一般使用 exit 命令退出并终止当前进程。

[docker attach](#attach-命令)不会创建新进程，而是将标准输入与标准输出直接附着在容器进程之上(使用户可以通过键盘来操作容器，使容器中的输出可通过显示器展示给用户)，一般不使用选项。但需要考虑退出容器的方式是使用 exit 还是 ctrl+p+q。

### 容器内进程查看

[docker top](#top-命令)命令后可携带 ps 命令的选项。

### 容器日志查看

[docker logs](#logs-命令)查看的是容器中应用运行日志。这个应用是根据容器创建时命令([docker run](#run-命令)或者[docker create](#create-命令))中的[command]指定，或通过容器镜像的 Dockerfile 中的 CMD 指令指定。

### 容器启停

[docker start](#start-命令)启动的是容器本身，但容器在启动的同时会启动一个应用，而这个应用是根据容器创建时命令中的[command]指定，或通过容器镜像的 Dockerfile 中的 CMD 指令指定。

容器停止命令停止的是容器本身，但在容器停止之前会先停止容器中的所有进程的运行，也就停止了对外提供服务的应用进程。

[docker pause](#pause-命令)仅暂停的是容器对外提供的服务，容器本身没有停止运行，所以容器中的应用也就没有停止运行，只不过其不能通过容器再对外提供服务了。

### 容器删除

[docker rm](#rm-命令)进行容器删除，选项 -f 进行强制删除。

[docker rmi](#rmi-命令)进行镜像删除，选项 -f 进行强制删除，镜像的强制删除不会强制删除 UP 状态的容器的镜像。

### 容器与宿主机文件传递

- 理解容器本身就是一个文件系统
- 理解[docker cp](#cp-命令)就是用于完成从一个文件系统复制到另一个文件系统的操作，与容器是否运行无关
- 了解[docker cp](#cp-命令)不支持容器间的文件复制

### 提交容器为镜像

- [docker commit](#commit-命令)生成的镜像中包含容器的原镜像的所有分层信息包括历史记录

### 容器的导入导出

- 理解[容器镜像的导入导出对比](#容器镜像的导入导出对比)
- 理解 docker export 是对镜像分层合并后视图的文件系统快照的导出，仅包含合并后的一层镜像信息，不包含原镜像分层历史记录。

## Docker 命令

### 所有命令

```bash
docker --help

Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Log in to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx (Docker Inc., v0.11.2)
  compose*    Docker Compose (Docker Inc., v2.20.2)
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  plugin      Manage plugins
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Swarm Commands:
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/root/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/root/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/root/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/root/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
```

### pull 命令

```bash
docker pull --help

Usage:  docker pull [OPTIONS] NAME[:TAG|@DIGEST]

Download an image from a registry

Aliases:
  docker image pull, docker pull

Options:
  -a, --all-tags                Download all tagged images in the repository
      --disable-content-trust   Skip image verification (default true)
      --platform string         Set platform if server is multi-platform
                                capable
  -q, --quiet                   Suppress verbose output
```

### images 命令

```bash
docker images --help

Usage:  docker images [OPTIONS] [REPOSITORY[:TAG]]

List images

Aliases:
  docker image ls, docker image list, docker images

Options:
  -a, --all             Show all images (default hides intermediate images)
      --digests         Show digests
  -f, --filter filter   Filter output based on conditions provided
      --format string   Format output using a custom template:
                        'table':            Print output in table format
                        with column headers (default)
                        'table TEMPLATE':   Print output in table format
                        using the given Go template
                        'json':             Print in JSON format
                        'TEMPLATE':         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        for more information about formatting output with
                        templates
      --no-trunc        Don't truncate output
  -q, --quiet           Only show image IDs
```

### search 命令

```bash
docker search --help

Usage:  docker search [OPTIONS] TERM

Search Docker Hub for images

Options:
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print search using a Go template
      --limit int       Max number of search results
      --no-trunc        Don't truncate output
```

### rmi 命令

```bash
docker rmi --help

Usage:  docker rmi [OPTIONS] IMAGE [IMAGE...]

Remove one or more images

Aliases:
  docker image rm, docker image remove, docker rmi

Options:
  -f, --force      Force removal of the image
      --no-prune   Do not delete untagged parents
```

### run 命令

```bash
docker run --help

Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Create and run a new container from an image

Aliases:
  docker container run, docker run

Options:
      --add-host list                  Add a custom host-to-IP mapping (host:ip)
      --annotation map                 Add an annotation to the container (passed through to the
                                       OCI runtime) (default map[])
  -a, --attach list                    Attach to STDIN, STDOUT or STDERR
      --blkio-weight uint16            Block IO (relative weight), between 10 and 1000, or 0 to
                                       disable (default 0)
      --blkio-weight-device list       Block IO weight (relative device weight) (default [])
      --cap-add list                   Add Linux capabilities
      --cap-drop list                  Drop Linux capabilities
      --cgroup-parent string           Optional parent cgroup for the container
      --cgroupns string                Cgroup namespace to use (host|private)
                                       'host':    Run the container in the Docker host's cgroup
                                       namespace
                                       'private': Run the container in its own private cgroup
                                       namespace
                                       '':        Use the cgroup namespace as configured by the
                                                  default-cgroupns-mode option on the daemon (default)
      --cidfile string                 Write the container ID to the file
      --cpu-period int                 Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int                  Limit CPU CFS (Completely Fair Scheduler) quota
      --cpu-rt-period int              Limit CPU real-time period in microseconds
      --cpu-rt-runtime int             Limit CPU real-time runtime in microseconds
  -c, --cpu-shares int                 CPU shares (relative weight)
      --cpus decimal                   Number of CPUs
      --cpuset-cpus string             CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string             MEMs in which to allow execution (0-3, 0,1)
  -d, --detach                         Run container in background and print container ID
      --detach-keys string             Override the key sequence for detaching a container
      --device list                    Add a host device to the container
      --device-cgroup-rule list        Add a rule to the cgroup allowed devices list
      --device-read-bps list           Limit read rate (bytes per second) from a device (default [])
      --device-read-iops list          Limit read rate (IO per second) from a device (default [])
      --device-write-bps list          Limit write rate (bytes per second) to a device (default [])
      --device-write-iops list         Limit write rate (IO per second) to a device (default [])
      --disable-content-trust          Skip image verification (default true)
      --dns list                       Set custom DNS servers
      --dns-option list                Set DNS options
      --dns-search list                Set custom DNS search domains
      --domainname string              Container NIS domain name
      --entrypoint string              Overwrite the default ENTRYPOINT of the image
  -e, --env list                       Set environment variables
      --env-file list                  Read in a file of environment variables
      --expose list                    Expose a port or a range of ports
      --gpus gpu-request               GPU devices to add to the container ('all' to pass all GPUs)
      --group-add list                 Add additional groups to join
      --health-cmd string              Command to run to check health
      --health-interval duration       Time between running the check (ms|s|m|h) (default 0s)
      --health-retries int             Consecutive failures needed to report unhealthy
      --health-start-period duration   Start period for the container to initialize before
                                       starting health-retries countdown (ms|s|m|h) (default 0s)
      --health-timeout duration        Maximum time to allow one check to run (ms|s|m|h) (default 0s)
      --help                           Print usage
  -h, --hostname string                Container host name
      --init                           Run an init inside the container that forwards signals and
                                       reaps processes
  -i, --interactive                    Keep STDIN open even if not attached
      --ip string                      IPv4 address (e.g., 172.30.100.104)
      --ip6 string                     IPv6 address (e.g., 2001:db8::33)
      --ipc string                     IPC mode to use
      --isolation string               Container isolation technology
      --kernel-memory bytes            Kernel memory limit
  -l, --label list                     Set meta data on a container
      --label-file list                Read in a line delimited file of labels
      --link list                      Add link to another container
      --link-local-ip list             Container IPv4/IPv6 link-local addresses
      --log-driver string              Logging driver for the container
      --log-opt list                   Log driver options
      --mac-address string             Container MAC address (e.g., 92:d0:c6:0a:29:33)
  -m, --memory bytes                   Memory limit
      --memory-reservation bytes       Memory soft limit
      --memory-swap bytes              Swap limit equal to memory plus swap: '-1' to enable
                                       unlimited swap
      --memory-swappiness int          Tune container memory swappiness (0 to 100) (default -1)
      --mount mount                    Attach a filesystem mount to the container
      --name string                    Assign a name to the container
      --network network                Connect a container to a network
      --network-alias list             Add network-scoped alias for the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune host's OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for unlimited)
      --platform string                Set platform if server is multi-platform capable
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container's port(s) to the host
  -P, --publish-all                    Publish all exposed ports to random ports
      --pull string                    Pull image before running ("always", "missing", "never")
                                       (default "missing")
  -q, --quiet                          Suppress the pull output
      --read-only                      Mount the container's root filesystem as read only
      --restart string                 Restart policy to apply when a container exits (default "no")
      --rm                             Automatically remove the container when it exits
      --runtime string                 Runtime to use for this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --sig-proxy                      Proxy received signals to the process (default true)
      --stop-signal string             Signal to stop the container
      --stop-timeout int               Timeout (in seconds) to stop a container
      --storage-opt list               Storage driver options for the container
      --sysctl map                     Sysctl options (default map[])
      --tmpfs list                     Mount a tmpfs directory
  -t, --tty                            Allocate a pseudo-TTY
      --ulimit ulimit                  Ulimit options (default [])
  -u, --user string                    Username or UID (format: <name|uid>[:<group|gid>])
      --userns string                  User namespace to use
      --uts string                     UTS namespace to use
  -v, --volume list                    Bind mount a volume
      --volume-driver string           Optional volume driver for the container
      --volumes-from list              Mount volumes from the specified container(s)
  -w, --workdir string                 Working directory inside the container
```

### 以交互的方式运行容器

[option]:-it 即为选择交互方式运行

```bash
docker run [options] -it image [command] [args]
```

#### ubuntu

```bash
docker run --name myubuntu -it ubuntu /bin/bas
```

#### tomcat

```bash
docker run --name mytomcat -it tomcat[:tag]
```

### 以分离模式运行容器

#### tomcat

```bash
docker run [options] -dp 80:8080 tomcat[:tag]
```

### start 命令

```bash
docker start --help

Usage:  docker start [OPTIONS] CONTAINER [CONTAINER...]

Start one or more stopped containers

Aliases:
  docker container start, docker start

Options:
  -a, --attach               Attach STDOUT/STDERR and forward signals
      --detach-keys string   Override the key sequence for detaching a container
  -i, --interactive          Attach container's STDIN
```

### restart 命令

```bash
docker restart --help

Usage:  docker restart [OPTIONS] CONTAINER [CONTAINER...]

Restart one or more containers

Aliases:
  docker container restart, docker restart

Options:
  -s, --signal string   Signal to send to the container
  -t, --time int        Seconds to wait before killing the container
```

### create 命令

```bash
docker create --help

Usage:  docker create [OPTIONS] IMAGE [COMMAND] [ARG...]

Create a new container

Aliases:
  docker container create, docker create

Options:
      --add-host list                  Add a custom host-to-IP mapping (host:ip)
      --annotation map                 Add an annotation to the container (passed
                                       through to the OCI runtime) (default map[])
  -a, --attach list                    Attach to STDIN, STDOUT or STDERR
      --blkio-weight uint16            Block IO (relative weight), between 10 and
                                       1000, or 0 to disable (default 0)
      --blkio-weight-device list       Block IO weight (relative device weight)
                                       (default [])
      --cap-add list                   Add Linux capabilities
      --cap-drop list                  Drop Linux capabilities
      --cgroup-parent string           Optional parent cgroup for the container
      --cgroupns string                Cgroup namespace to use (host|private)
                                       'host':    Run the container in the Docker
                                       host's cgroup namespace
                                       'private': Run the container in its own
                                       private cgroup namespace
                                       '':        Use the cgroup namespace as
                                       configured by the
                                                  default-cgroupns-mode option on
                                       the daemon (default)
      --cidfile string                 Write the container ID to the file
      --cpu-period int                 Limit CPU CFS (Completely Fair Scheduler)
                                       period
      --cpu-quota int                  Limit CPU CFS (Completely Fair Scheduler) quota
      --cpu-rt-period int              Limit CPU real-time period in microseconds
      --cpu-rt-runtime int             Limit CPU real-time runtime in microseconds
  -c, --cpu-shares int                 CPU shares (relative weight)
      --cpus decimal                   Number of CPUs
      --cpuset-cpus string             CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string             MEMs in which to allow execution (0-3, 0,1)
      --device list                    Add a host device to the container
      --device-cgroup-rule list        Add a rule to the cgroup allowed devices list
      --device-read-bps list           Limit read rate (bytes per second) from a
                                       device (default [])
      --device-read-iops list          Limit read rate (IO per second) from a
                                       device (default [])
      --device-write-bps list          Limit write rate (bytes per second) to a
                                       device (default [])
      --device-write-iops list         Limit write rate (IO per second) to a
                                       device (default [])
      --disable-content-trust          Skip image verification (default true)
      --dns list                       Set custom DNS servers
      --dns-option list                Set DNS options
      --dns-search list                Set custom DNS search domains
      --domainname string              Container NIS domain name
      --entrypoint string              Overwrite the default ENTRYPOINT of the image
  -e, --env list                       Set environment variables
      --env-file list                  Read in a file of environment variables
      --expose list                    Expose a port or a range of ports
      --gpus gpu-request               GPU devices to add to the container ('all'
                                       to pass all GPUs)
      --group-add list                 Add additional groups to join
      --health-cmd string              Command to run to check health
      --health-interval duration       Time between running the check (ms|s|m|h)
                                       (default 0s)
      --health-retries int             Consecutive failures needed to report unhealthy
      --health-start-period duration   Start period for the container to
                                       initialize before starting health-retries
                                       countdown (ms|s|m|h) (default 0s)
      --health-timeout duration        Maximum time to allow one check to run
                                       (ms|s|m|h) (default 0s)
      --help                           Print usage
  -h, --hostname string                Container host name
      --init                           Run an init inside the container that
                                       forwards signals and reaps processes
  -i, --interactive                    Keep STDIN open even if not attached
      --ip string                      IPv4 address (e.g., 172.30.100.104)
      --ip6 string                     IPv6 address (e.g., 2001:db8::33)
      --ipc string                     IPC mode to use
      --isolation string               Container isolation technology
      --kernel-memory bytes            Kernel memory limit
  -l, --label list                     Set meta data on a container
      --label-file list                Read in a line delimited file of labels
      --link list                      Add link to another container
      --link-local-ip list             Container IPv4/IPv6 link-local addresses
      --log-driver string              Logging driver for the container
      --log-opt list                   Log driver options
      --mac-address string             Container MAC address (e.g., 92:d0:c6:0a:29:33)
  -m, --memory bytes                   Memory limit
      --memory-reservation bytes       Memory soft limit
      --memory-swap bytes              Swap limit equal to memory plus swap: '-1'
                                       to enable unlimited swap
      --memory-swappiness int          Tune container memory swappiness (0 to
                                       100) (default -1)
      --mount mount                    Attach a filesystem mount to the container
      --name string                    Assign a name to the container
      --network network                Connect a container to a network
      --network-alias list             Add network-scoped alias for the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune host's OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for
                                       unlimited)
      --platform string                Set platform if server is multi-platform
                                       capable
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container's port(s) to the host
  -P, --publish-all                    Publish all exposed ports to random ports
      --pull string                    Pull image before creating ("always",
                                       "|missing", "never") (default "missing")
  -q, --quiet                          Suppress the pull output
      --read-only                      Mount the container's root filesystem as
                                       read only
      --restart string                 Restart policy to apply when a container
                                       exits (default "no")
      --rm                             Automatically remove the container when it
                                       exits
      --runtime string                 Runtime to use for this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --stop-signal string             Signal to stop the container
      --stop-timeout int               Timeout (in seconds) to stop a container
      --storage-opt list               Storage driver options for the container
      --sysctl map                     Sysctl options (default map[])
      --tmpfs list                     Mount a tmpfs directory
  -t, --tty                            Allocate a pseudo-TTY
      --ulimit ulimit                  Ulimit options (default [])
  -u, --user string                    Username or UID (format:
                                       <name|uid>[:<group|gid>])
      --userns string                  User namespace to use
      --uts string                     UTS namespace to use
  -v, --volume list                    Bind mount a volume
      --volume-driver string           Optional volume driver for the container
      --volumes-from list              Mount volumes from the specified container(s)
  -w, --workdir string                 Working directory inside the container
```

### ps 命令

```bash
docker ps --help

Usage:  docker ps [OPTIONS]

List containers

Aliases:
  docker container ls, docker container list, docker container ps, docker ps

Options:
  -a, --all             Show all containers (default shows just running)
  -f, --filter filter   Filter output based on conditions provided
      --format string   Format output using a custom template:
                        'table':            Print output in table format with column headers
                        (default)
                        'table TEMPLATE':   Print output in table format using the given Go
                        template
                        'json':             Print in JSON format
                        'TEMPLATE':         Print output using the given Go template.
                        Refer to https://docs.docker.com/go/formatting/ for more information
                        about formatting output with templates
  -n, --last int        Show n last created containers (includes all states) (default -1)
  -l, --latest          Show the latest created container (includes all states)
      --no-trunc        Don't truncate output
  -q, --quiet           Only display container IDs
  -s, --size            Display total file sizes
```

### exec 命令

生成副本去操作容器，退出不影响容器运行

```bash
docker exec --help

Usage:  docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

Execute a command in a running container

Aliases:
  docker container exec, docker exec

Options:
  -d, --detach               Detached mode: run command in the background
      --detach-keys string   Override the key sequence for detaching a
                             container
  -e, --env list             Set environment variables
      --env-file list        Read in a file of environment variables
  -i, --interactive          Keep STDIN open even if not attached
      --privileged           Give extended privileges to the command
  -t, --tty                  Allocate a pseudo-TTY
  -u, --user string          Username or UID (format:
                             "<name|uid>[:<group|gid>]")
  -w, --workdir string       Working directory inside the container
```

### attach 命令

同步输入输出流到容器，退出时也会结束容器进程

```bash
docker attach --help

Usage:  docker attach [OPTIONS] CONTAINER

Attach local standard input, output, and error streams to a running container

Aliases:
  docker container attach, docker attach

Options:
      --detach-keys string   Override the key sequence for detaching a
                             container
      --no-stdin             Do not attach STDIN
      --sig-proxy            Proxy all received signals to the process
                             (default true)
```

### top 命令

```bash
docker top --help

Usage:  docker top CONTAINER [ps OPTIONS]

Display the running processes of a container

Aliases:
  docker container top, docker top
```

### pause 命令

```bash
docker pause --help

Usage:  docker pause CONTAINER [CONTAINER...]

Pause all processes within one or more containers

Aliases:
  docker container pause, docker pause
```

### unpause 命令

```bash
docker unpause --help

Usage:  docker unpause CONTAINER [CONTAINER...]

Unpause all processes within one or more containers

Aliases:
  docker container unpause, docker unpause
```

### stop 命令

```bash
docker stop --help

Usage:  docker stop [OPTIONS] CONTAINER [CONTAINER...]

Stop one or more running containers

Aliases:
  docker container stop, docker stop

Options:
  -s, --signal string   Signal to send to the container
  -t, --time int        Seconds to wait before killing the container
```

### kill 命令

```bash
docker kill --help

Usage:  docker kill [OPTIONS] CONTAINER [CONTAINER...]

Kill one or more running containers

Aliases:
  docker container kill, docker kill

Options:
  -s, --signal string   Signal to send to the container
```

### logs 命令

```bash
docker logs --help

Usage:  docker logs [OPTIONS] CONTAINER

Fetch the logs of a container

Aliases:
  docker container logs, docker logs

Options:
      --details        Show extra details provided to logs
  -f, --follow         Follow log output
      --since string   Show logs since timestamp (e.g.
                       "2013-01-02T13:23:37Z") or relative (e.g. "42m"
                       for 42 minutes)
  -n, --tail string    Number of lines to show from the end of the logs
                       (default "all")
  -t, --timestamps     Show timestamps
      --until string   Show logs before a timestamp (e.g.
                       "2013-01-02T13:23:37Z") or relative (e.g. "42m"
                       for 42 minutes)
```

### cp 命令

```bash
docker cp --help

Usage:  docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
        docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH

Copy files/folders between a container and the local filesystem

Use '-' as the source to read a tar archive from stdin
and extract it to a directory destination in a container.
Use '-' as the destination to stream a tar archive of a
container source to stdout.

Aliases:
  docker container cp, docker cp

Options:
  -a, --archive       Archive mode (copy all uid/gid information)
  -L, --follow-link   Always follow symbol link in SRC_PATH
  -q, --quiet         Suppress progress output during copy. Progress
                      output is automatically suppressed if no terminal
                      is attached
```

### rm 命令

```bash
 docker rm --help

Usage:  docker rm [OPTIONS] CONTAINER [CONTAINER...]

Remove one or more containers

Aliases:
  docker container rm, docker container remove, docker rm

Options:
  -f, --force     Force the removal of a running container (uses SIGKILL)
  -l, --link      Remove the specified link
  -v, --volumes   Remove anonymous volumes associated with the container
```

### inspect 命令

```bash
docker inspect --help

Usage:  docker inspect [OPTIONS] NAME|ID [NAME|ID...]

Return low-level information on Docker objects

Options:
  -f, --format string   Format output using a custom template:
                        'json':             Print in JSON format
                        'TEMPLATE':         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        for more information about formatting output with
                        templates
  -s, --size            Display total file sizes if the type is container
      --type string     Return JSON for specified type
```

### commit 命令

```bash
docker commit --help

Usage:  docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]

Create a new image from a container's changes

Aliases:
  docker container commit, docker commit

Options:
  -a, --author string    Author (e.g., "John Hannibal Smith
                         <hannibal@a-team.com>")
  -c, --change list      Apply Dockerfile instruction to the created image
  -m, --message string   Commit message
  -p, --pause            Pause container during commit (default true)
```

### save 命令

```bash
docker save --help

Usage:  docker save [OPTIONS] IMAGE [IMAGE...]

Save one or more images to a tar archive (streamed to STDOUT by default)

Aliases:
  docker image save, docker save

Options:
  -o, --output string   Write to a file, instead of STDOUT
```

### load 命令

```bash
docker load --help

Usage:  docker load [OPTIONS]

Load an image from a tar archive or STDIN

Aliases:
  docker image load, docker load

Options:
  -i, --input string   Read from tar archive file, instead of STDIN
  -q, --quiet          Suppress the load output
```

### 导入导出镜像命令

#### 详解

### export 命令

```bash
docker export --help

Usage:  docker export [OPTIONS] CONTAINER

Export a container's filesystem as a tar archive

Aliases:
  docker container export, docker export

Options:
  -o, --output string   Write to a file, instead of STDOUT
```

### import 命令

```bash
docker import --help

Usage:  docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]

Import the contents from a tarball to create a filesystem image

Aliases:
  docker image import, docker import

Options:
  -c, --change list       Apply Dockerfile instruction to the created image
  -m, --message string    Set commit message for imported image
      --platform string   Set platform if server is multi-platform capable
```

### 导入导出容器命令

#### 详解

#### 容器镜像的导入导出对比

##### export/save

- export 作用于容器，save 作用于镜像，但是导出文件都为 tar 文件
- export 一次只能导出一个容器，save 一次可以对多个镜像进行导出
- export 只是对当前容器的文件系统快照进行导出，其会丢失原镜像的所有历史记录和元数据信息，save 则是保存了原镜像的完整记录

##### import/load

- import 导入的是容器包；load 加载的是镜像包，但是最终都会恢复成镜像
- import 恢复的镜像只包含当前镜像一层,镜像分层合并层；load 恢复的镜像与原镜像是完全相同的，镜像分层信息一致
- import 恢复的镜像就是新构建的镜像，与原镜像的 ImageID 不同；load 恢复的镜像与原镜像是同一个镜像，即 ImageID 相同
- import 可以导入的镜像指定 repository 与 tag，load 加载的镜像不能指定，于原镜像相同

##### export&import/commit

- 相同点：export + import 会将一个容器变为一个镜像，commit 也可以
- 不同点：export + import 恢复的镜像仅包含原容器生成的一层分层，commit 生成的镜像中包含容器的原镜像的所有分层信息

### history 命令

```bash
docker history --help

Usage:  docker history [OPTIONS] IMAGE

Show the history of an image

Aliases:
  docker image history, docker history

Options:
      --format string   Format output using a custom template:
                        'table':            Print output in table format
                        with column headers (default)
                        'table TEMPLATE':   Print output in table format
                        using the given Go template
                        'json':             Print in JSON format
                        'TEMPLATE':         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        for more information about formatting output with
                        templates
  -H, --human           Print sizes and dates in human readable format
                        (default true)
      --no-trunc        Don't truncate output
  -q, --quiet           Only show image IDs
```

### system 命令 | 命令集

```bash
docker system COMMAND --help

Usage:  docker system COMMAND

Manage Docker

Commands:
  df          Show docker disk usage
  events      Get real time events from the server
  info        Display system-wide information
  prune       Remove unused data

Run 'docker system COMMAND --help' for more information on a command.
```

重点理解 prune 命令

#### df

```bash
docker system df --help

Usage:  docker system df [OPTIONS]

Show docker disk usage

Options:
      --format string   Format output using a custom template:
                        'table':            Print output in table format
                        with column headers (default)
                        'table TEMPLATE':   Print output in table format
                        using the given Go template
                        'json':             Print in JSON format
                        'TEMPLATE':         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        for more information about formatting output with
                        templates
  -v, --verbose         Show detailed information on space usage
```

#### events

```bash
docker system events --help

Usage:  docker system events [OPTIONS]

Get real time events from the server

Aliases:
  docker system events, docker events

Options:
  -f, --filter filter   Filter output based on conditions provided
      --format string   Format the output using the given Go template
      --since string    Show all events created since timestamp
      --until string    Stream events until this timestamp
```

#### info

```bash
docker system info --help

Usage:  docker system info [OPTIONS]

Display system-wide information

Aliases:
  docker system info, docker info

Options:
  -f, --format string   Format output using a custom template:
                        'json':             Print in JSON format
                        'TEMPLATE':         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        for more information about formatting output with
                        templates
```

#### prune

重点

```bash
docker system prune --help

Usage:  docker system prune [OPTIONS]

Remove unused data

Options:
  -a, --all             Remove all unused images not just dangling ones
      --filter filter   Provide filter values (e.g. "label=<key>=<value>")
  -f, --force           Do not prompt for confirmation
      --volumes         Prune volumes
```

### build 命令

```bash
docker build --help

Usage:  docker buildx build [OPTIONS] PATH | URL | -

Start a build

Aliases:
  docker buildx build, docker buildx b

Options:
      --add-host strings              Add a custom host-to-IP mapping
                                      (format: "host:ip")
      --allow strings                 Allow extra privileged entitlement
                                      (e.g., "network.host",
                                      "security.insecure")
      --attest stringArray            Attestation parameters (format:
                                      "type=sbom,generator=image")
      --build-arg stringArray         Set build-time variables
      --build-context stringArray     Additional build contexts (e.g.,
                                      name=path)
      --builder string                Override the configured builder
                                      instance (default "default")
      --cache-from stringArray        External cache sources (e.g.,
                                      "user/app:cache",
                                      "type=local,src=path/to/dir")
      --cache-to stringArray          Cache export destinations (e.g.,
                                      "user/app:cache",
                                      "type=local,dest=path/to/dir")
      --cgroup-parent string          Optional parent cgroup for the container
  -f, --file string                   Name of the Dockerfile (default:
                                      "PATH/Dockerfile")
      --iidfile string                Write the image ID to the file
      --label stringArray             Set metadata for an image
      --load                          Shorthand for "--output=type=docker"
      --metadata-file string          Write build result metadata to the file
      --network string                Set the networking mode for the
                                      "RUN" instructions during build
                                      (default "default")
      --no-cache                      Do not use cache when building the image
      --no-cache-filter stringArray   Do not cache specified stages
  -o, --output stringArray            Output destination (format:
                                      "type=local,dest=path")
      --platform stringArray          Set target platform for build
      --progress string               Set type of progress output
                                      ("auto", "plain", "tty"). Use plain
                                      to show container output (default
                                      "auto")
      --provenance string             Shorthand for "--attest=type=provenance"
      --pull                          Always attempt to pull all
                                      referenced images
      --push                          Shorthand for "--output=type=registry"
  -q, --quiet                         Suppress the build output and print
                                      image ID on success
      --sbom string                   Shorthand for "--attest=type=sbom"
      --secret stringArray            Secret to expose to the build
                                      (format:
                                      "id=mysecret[,src=/local/secret]")
      --shm-size bytes                Size of "/dev/shm"
      --ssh stringArray               SSH agent socket or keys to expose
                                      to the build (format:
                                      "default|<id>[=<socket>|<key>[,<key>]]")
  -t, --tag stringArray               Name and optionally a tag (format:
                                      "name:tag")
      --target string                 Set the target build stage to build
      --ulimit ulimit                 Ulimit options (default [])
```

### tag 命令

```bash
docker tag --help

Usage:  docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE

Aliases:
  docker image tag, docker tag
```

## Dockerfile

### 简介

Dockerfile 是用于构建 Docker 镜像的脚本文件，有一系列指令构成。通过 docker build 命令构建镜像时，Dockerfile 的指令会由上到下依次进行，每条指令都将会构建出一个镜像。这就是镜像的分层，因此，指令越多，层次越多，创建的镜像就越多，效率就会变低，所以在定义 Dockerfile 时，能在一个指令完成的动作就不要分成两条。

### 简单构建

首先安装一下 C、C++的编译器

```bash
yum install -y gcc gcc-c++
```

待安装好后，还需要安装静态库

```bash
yum install -y glibc-static
```

编写 hello.c 文件

```bash
mkdir hw
cd hw
vim hello.c
//进入编辑
```

```c
#include<stdio.h>
int main()
{
    printf("hello world!");
    return 0;
}
```

随后需要编译一下

```bash
gcc --static -o hello hello.c
```

编写 Dockerfile 文件

```bash
vim Dockerfile
```

```dockerfile
FROM scratch
ADD hello /
CMD ["/hello"]
```

```bash
//build镜像
docker build -t hello-my .
//查看镜像
docker images
//run镜像
docker run hello-my
```

构建多个镜像

```bash
docker build -t hm:2.0 -t hm:3.0 -t hm:4.0 .
```

### scratch镜像

了解一个特殊镜像scratch。它本身是一个空镜像，但它是所有镜像的base Image，相当于面向对象编程中的Object类，scratch镜像只能在Dockerfile中被继承，不能使用其它命令操作，例如不能pull，run以及tag等等。

它也不会去生成镜像中的文件系统层。在Docker中，scratch是一个保留字段，用户不能使用其作为自己的镜像名称使用。

### 构建自己的CentOS镜像

```bash
mkdir cent
cd cent
vim Dockerfile
```

```dockerfile
FROM centos:7
MAINTAINER Ilee zihao02325@gmail.com
LABEL version="1.0" description="this is a centos7 image created by Ilee"

ENV WORKPATH /usr/local
WORKDIR $WORKPATH

RUN yum install -y wget vim net-tools
CMD /bin/bash
```

```bash
docker build -t ileecentos:1.0 .
docker images
docker run --name ileecentos -it ileecentos:1.0
```

## Dockerfile指令

- 通常指令以大写形式出现，以便区别于其它参数
- 指令后至少携带一个参数
- #出现在一行的最开端，代表是 comment 注释

### FROM

```dockerfile
Usage: FROM <image>[:<tag>]
# 用于指定基础镜像，且必须是第一条指令。
```

### MAINTAINER

```dockerfile
Usage: MAINTAINER <name>
# 该指令的参数填写一般是维护者姓名和信箱。不过，该指令官方已不建议使用，而是使用LABEL指令代替。
```

### LABEL

```dockerfile
Usage: LABEL <key>=<value> <key>=<value> ......
# 该指令可以通过以键值对的方式包含任意镜像的元数据信息，用于代替MAINTAINER指令。通过docker inspect可以查看到LABEL于MAINTAINER的内容。
```

### ENV

```dockerfile
Usage1: ENV <key> <value>
# 用于指定环境变量，这些环境变量，后续可以被RUN指令使用，容器运行起来之后。也可以在容器中获取这些环境变量。
Usage2: ENV <key1>=<value1> <key2>=<value2>
# 可以设置多个变量，每个变量为一对<key>=<value>指定。
```

### WORKDIR

```dockerfile
Usage: WORKDIR path
# 容器打开后默认进入的目录，一般在后续的RUN、CMD、ENTRYPOINT、ADD等指令中会引用该目录，可以设置多个WORKDIR指令。后续WORKDIR指令若用的是相对路径，则会基于之前WORKDIR指令指定的路径。在使用docker run运行容器时，可以通过-w参数覆盖构建时所设置的工作目录。
```

### RUN

```dockerfile
Usage1: RUN <command>
# 这里的<command>就是shell命令。docker build执行过程中，会使用shell运行指定的command。
Usage2: RUN ["EXECUTABLE","PARAM1","PARAM2",...]
# 在docker build执行过程中，会调用第一个参数"EXECUTABLE"指定的应用程序运行，并使用后面第二、第三等参数作为应用程序的运行参数。
```

### CMD

```dockerfile
Usage1: CMD ["EXECUTABLE","PARAM1","PARAM2",...]
# 在容器启动后，即在执行完docker run后会立即调用执行"EXECUTABLE"指定的可执行文件，并使用后面第二、第三等参数作为应用程序的运行参数。
Usage2: CMD command param1 param2
# 这里的command就是shell命令。在容器启动后会立即执行指定的shell命令。
```

### ENTRYPOINT

```dockerfile
Usage: ENTRYPOINT
```

### EXPOSE

```dockerfile
Usage: EXPOSE
```

### ARG

```dockerfile
Usage: ARG
```

### ADD

```dockerfile
Usage: ADD
```

### COPY

```### WORKDIR
Usage: COPY
```

### ONBUILD

```### WORKDIR
Usage: ONBUILD
```

### VOLUME

```dockerfile
Usage: VOLUME
```
