import{_ as n,o as s,c as a,a as e}from"./app-5539d687.js";const i={},t=e(`<h1 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h1><h2 id="所有命令" tabindex="-1"><a class="header-anchor" href="#所有命令" aria-hidden="true">#</a> 所有命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> COMMAND

A self-sufficient runtime <span class="token keyword">for</span> containers

Common Commands:
  run         Create and run a new container from an image
  <span class="token builtin class-name">exec</span>        Execute a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a running container
  <span class="token function">ps</span>          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Log <span class="token keyword">in</span> to a registry
  <span class="token builtin class-name">logout</span>      Log out from a registry
  search      Search Docker Hub <span class="token keyword">for</span> images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx <span class="token punctuation">(</span>Docker Inc., v0.11.2<span class="token punctuation">)</span>
  compose*    Docker Compose <span class="token punctuation">(</span>Docker Inc., v2.20.2<span class="token punctuation">)</span>
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
  attach      Attach <span class="token builtin class-name">local</span> standard input, output, and error streams to a running container
  commit      Create a new image from a container<span class="token string">&#39;s changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container&#39;</span>s filesystem
  events      Get real <span class="token function">time</span> events from the server
  <span class="token builtin class-name">export</span>      Export a container<span class="token string">&#39;s filesystem as a tar archive
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
      --config string      Location of client config files (default &quot;/root/.docker&quot;)
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with &quot;docker context use&quot;)
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level (&quot;debug&quot;, &quot;info&quot;, &quot;warn&quot;, &quot;error&quot;, &quot;fatal&quot;) (default &quot;info&quot;)
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default &quot;/root/.docker/ca.pem&quot;)
      --tlscert string     Path to TLS certificate file (default &quot;/root/.docker/cert.pem&quot;)
      --tlskey string      Path to TLS key file (default &quot;/root/.docker/key.pem&quot;)
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run &#39;</span><span class="token function">docker</span> COMMAND --help&#39; <span class="token keyword">for</span> <span class="token function">more</span> information on a command.

For <span class="token function">more</span> <span class="token builtin class-name">help</span> on how to use Docker, <span class="token function">head</span> to https://docs.docker.com/go/guides/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pull-命令" tabindex="-1"><a class="header-anchor" href="#pull-命令" aria-hidden="true">#</a> pull 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> pull <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token punctuation">[</span>:TAG<span class="token operator">|</span>@DIGEST<span class="token punctuation">]</span>

Download an image from a registry

Aliases:
  <span class="token function">docker</span> image pull, <span class="token function">docker</span> pull

Options:
  -a, --all-tags                Download all tagged images <span class="token keyword">in</span> the repository
      --disable-content-trust   Skip image verification <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--platform</span> string         Set platform <span class="token keyword">if</span> server is multi-platform
                                capable
  -q, <span class="token parameter variable">--quiet</span>                   Suppress verbose output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="images-命令" tabindex="-1"><a class="header-anchor" href="#images-命令" aria-hidden="true">#</a> images 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> images <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>

List images

Aliases:
  <span class="token function">docker</span> image ls, <span class="token function">docker</span> image list, <span class="token function">docker</span> images

Options:
  -a, <span class="token parameter variable">--all</span>             Show all images <span class="token punctuation">(</span>default hides intermediate images<span class="token punctuation">)</span>
      <span class="token parameter variable">--digests</span>         Show digests
  -f, <span class="token parameter variable">--filter</span> filter   Filter output based on conditions provided
      <span class="token parameter variable">--format</span> string   Format output using a custom template:
                        <span class="token string">&#39;table&#39;</span><span class="token builtin class-name">:</span>            Print output <span class="token keyword">in</span> table <span class="token function">format</span>
                        with <span class="token function">column</span> headers <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
                        <span class="token string">&#39;table TEMPLATE&#39;</span><span class="token builtin class-name">:</span>   Print output <span class="token keyword">in</span> table <span class="token function">format</span>
                        using the given Go template
                        <span class="token string">&#39;json&#39;</span><span class="token builtin class-name">:</span>             Print <span class="token keyword">in</span> JSON <span class="token function">format</span>
                        <span class="token string">&#39;TEMPLATE&#39;</span><span class="token builtin class-name">:</span>         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        <span class="token keyword">for</span> <span class="token function">more</span> information about formatting output with
                        templates
      --no-trunc        Don&#39;t truncate output
  -q, <span class="token parameter variable">--quiet</span>           Only show image IDs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="search-命令" tabindex="-1"><a class="header-anchor" href="#search-命令" aria-hidden="true">#</a> search 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> search <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token environment constant">TERM</span>

Search Docker Hub <span class="token keyword">for</span> images

Options:
  -f, <span class="token parameter variable">--filter</span> filter   Filter output based on conditions provided
      <span class="token parameter variable">--format</span> string   Pretty-print search using a Go template
      <span class="token parameter variable">--limit</span> int       Max number of search results
      --no-trunc        Don&#39;t truncate output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rmi-命令" tabindex="-1"><a class="header-anchor" href="#rmi-命令" aria-hidden="true">#</a> rmi 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> rmi <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Remove one or <span class="token function">more</span> images

Aliases:
  <span class="token function">docker</span> image rm, <span class="token function">docker</span> image remove, <span class="token function">docker</span> rmi

Options:
  -f, <span class="token parameter variable">--force</span>      Force removal of the image
      --no-prune   Do not delete untagged parents
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-命令" tabindex="-1"><a class="header-anchor" href="#run-命令" aria-hidden="true">#</a> run 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Create and run a new container from an image

Aliases:
  <span class="token function">docker</span> container run, <span class="token function">docker</span> run

Options:
      --add-host list                  Add a custom host-to-IP mapping <span class="token punctuation">(</span>host:ip<span class="token punctuation">)</span>
      <span class="token parameter variable">--annotation</span> map                 Add an annotation to the container <span class="token punctuation">(</span>passed through to the
                                       OCI runtime<span class="token punctuation">)</span> <span class="token punctuation">(</span>default map<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  -a, <span class="token parameter variable">--attach</span> list                    Attach to STDIN, STDOUT or STDERR
      --blkio-weight uint16            Block IO <span class="token punctuation">(</span>relative weight<span class="token punctuation">)</span>, between <span class="token number">10</span> and <span class="token number">1000</span>, or <span class="token number">0</span> to
                                       disable <span class="token punctuation">(</span>default <span class="token number">0</span><span class="token punctuation">)</span>
      --blkio-weight-device list       Block IO weight <span class="token punctuation">(</span>relative device weight<span class="token punctuation">)</span> <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --cap-add list                   Add Linux capabilities
      --cap-drop list                  Drop Linux capabilities
      --cgroup-parent string           Optional parent cgroup <span class="token keyword">for</span> the container
      <span class="token parameter variable">--cgroupns</span> string                Cgroup namespace to use <span class="token punctuation">(</span>host<span class="token operator">|</span>private<span class="token punctuation">)</span>
                                       <span class="token string">&#39;host&#39;</span><span class="token builtin class-name">:</span>    Run the container <span class="token keyword">in</span> the Docker <span class="token function">host</span><span class="token string">&#39;s cgroup
                                       namespace
                                       &#39;</span>private<span class="token string">&#39;: Run the container in its own private cgroup
                                       namespace
                                       &#39;</span>&#39;:        Use the cgroup namespace as configured by the
                                                  default-cgroupns-mode option on the daemon <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
      <span class="token parameter variable">--cidfile</span> string                 Write the container ID to the <span class="token function">file</span>
      --cpu-period int                 Limit CPU CFS <span class="token punctuation">(</span>Completely Fair Scheduler<span class="token punctuation">)</span> period
      --cpu-quota int                  Limit CPU CFS <span class="token punctuation">(</span>Completely Fair Scheduler<span class="token punctuation">)</span> <span class="token function">quota</span>
      --cpu-rt-period int              Limit CPU real-time period <span class="token keyword">in</span> microseconds
      --cpu-rt-runtime int             Limit CPU real-time runtime <span class="token keyword">in</span> microseconds
  -c, --cpu-shares int                 CPU shares <span class="token punctuation">(</span>relative weight<span class="token punctuation">)</span>
      <span class="token parameter variable">--cpus</span> decimal                   Number of CPUs
      --cpuset-cpus string             CPUs <span class="token keyword">in</span> <span class="token function">which</span> to allow execution <span class="token punctuation">(</span><span class="token number">0</span>-3, <span class="token number">0,1</span><span class="token punctuation">)</span>
      --cpuset-mems string             MEMs <span class="token keyword">in</span> <span class="token function">which</span> to allow execution <span class="token punctuation">(</span><span class="token number">0</span>-3, <span class="token number">0,1</span><span class="token punctuation">)</span>
  -d, <span class="token parameter variable">--detach</span>                         Run container <span class="token keyword">in</span> background and print container ID
      --detach-keys string             Override the key sequence <span class="token keyword">for</span> detaching a container
      <span class="token parameter variable">--device</span> list                    Add a <span class="token function">host</span> device to the container
      --device-cgroup-rule list        Add a rule to the cgroup allowed devices list
      --device-read-bps list           Limit <span class="token builtin class-name">read</span> rate <span class="token punctuation">(</span>bytes per second<span class="token punctuation">)</span> from a device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --device-read-iops list          Limit <span class="token builtin class-name">read</span> rate <span class="token punctuation">(</span>IO per second<span class="token punctuation">)</span> from a device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --device-write-bps list          Limit <span class="token function">write</span> rate <span class="token punctuation">(</span>bytes per second<span class="token punctuation">)</span> to a device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --device-write-iops list         Limit <span class="token function">write</span> rate <span class="token punctuation">(</span>IO per second<span class="token punctuation">)</span> to a device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --disable-content-trust          Skip image verification <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--dns</span> list                       Set custom DNS servers
      --dns-option list                Set DNS options
      --dns-search list                Set custom DNS search domains
      <span class="token parameter variable">--domainname</span> string              Container NIS domain name
      <span class="token parameter variable">--entrypoint</span> string              Overwrite the default ENTRYPOINT of the image
  -e, <span class="token parameter variable">--env</span> list                       Set environment variables
      --env-file list                  Read <span class="token keyword">in</span> a <span class="token function">file</span> of environment variables
      <span class="token parameter variable">--expose</span> list                    Expose a port or a range of ports
      <span class="token parameter variable">--gpus</span> gpu-request               GPU devices to <span class="token function">add</span> to the container <span class="token punctuation">(</span><span class="token string">&#39;all&#39;</span> to pass all GPUs<span class="token punctuation">)</span>
      --group-add list                 Add additional <span class="token function">groups</span> to <span class="token function">join</span>
      --health-cmd string              Command to run to check health
      --health-interval duration       Time between running the check <span class="token punctuation">(</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span> <span class="token punctuation">(</span>default 0s<span class="token punctuation">)</span>
      --health-retries int             Consecutive failures needed to report unhealthy
      --health-start-period duration   Start period <span class="token keyword">for</span> the container to initialize before
                                       starting health-retries countdown <span class="token punctuation">(</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span> <span class="token punctuation">(</span>default 0s<span class="token punctuation">)</span>
      --health-timeout duration        Maximum <span class="token function">time</span> to allow one check to run <span class="token punctuation">(</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span> <span class="token punctuation">(</span>default 0s<span class="token punctuation">)</span>
      <span class="token parameter variable">--help</span>                           Print usage
  -h, <span class="token parameter variable">--hostname</span> string                Container <span class="token function">host</span> name
      <span class="token parameter variable">--init</span>                           Run an init inside the container that forwards signals and
                                       reaps processes
  -i, <span class="token parameter variable">--interactive</span>                    Keep STDIN <span class="token function">open</span> even <span class="token keyword">if</span> not attached
      <span class="token parameter variable">--ip</span> string                      IPv4 address <span class="token punctuation">(</span>e.g., <span class="token number">172.30</span>.100.104<span class="token punctuation">)</span>
      <span class="token parameter variable">--ip6</span> string                     IPv6 address <span class="token punctuation">(</span>e.g., <span class="token number">2001</span>:db8::33<span class="token punctuation">)</span>
      <span class="token parameter variable">--ipc</span> string                     IPC mode to use
      <span class="token parameter variable">--isolation</span> string               Container isolation technology
      --kernel-memory bytes            Kernel memory limit
  -l, <span class="token parameter variable">--label</span> list                     Set meta data on a container
      --label-file list                Read <span class="token keyword">in</span> a line delimited <span class="token function">file</span> of labels
      <span class="token parameter variable">--link</span> list                      Add <span class="token function">link</span> to another container
      --link-local-ip list             Container IPv4/IPv6 link-local addresses
      --log-driver string              Logging driver <span class="token keyword">for</span> the container
      --log-opt list                   Log driver options
      --mac-address string             Container MAC address <span class="token punctuation">(</span>e.g., <span class="token number">92</span>:d0:c6:0a:29:33<span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--memory</span> bytes                   Memory limit
      --memory-reservation bytes       Memory soft limit
      --memory-swap bytes              Swap limit equal to memory plus swap: <span class="token string">&#39;-1&#39;</span> to <span class="token builtin class-name">enable</span>
                                       unlimited swap
      --memory-swappiness int          Tune container memory swappiness <span class="token punctuation">(</span><span class="token number">0</span> to <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>default -1<span class="token punctuation">)</span>
      <span class="token parameter variable">--mount</span> <span class="token function">mount</span>                    Attach a filesystem <span class="token function">mount</span> to the container
      <span class="token parameter variable">--name</span> string                    Assign a name to the container
      <span class="token parameter variable">--network</span> network                Connect a container to a network
      --network-alias list             Add network-scoped <span class="token builtin class-name">alias</span> <span class="token keyword">for</span> the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune <span class="token function">host</span><span class="token string">&#39;s OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for unlimited)
      --platform string                Set platform if server is multi-platform capable
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container&#39;</span>s port<span class="token punctuation">(</span>s<span class="token punctuation">)</span> to the <span class="token function">host</span>
  -P, --publish-all                    Publish all exposed ports to random ports
      <span class="token parameter variable">--pull</span> string                    Pull image before running <span class="token punctuation">(</span><span class="token string">&quot;always&quot;</span>, <span class="token string">&quot;missing&quot;</span>, <span class="token string">&quot;never&quot;</span><span class="token punctuation">)</span>
                                       <span class="token punctuation">(</span>default <span class="token string">&quot;missing&quot;</span><span class="token punctuation">)</span>
  -q, <span class="token parameter variable">--quiet</span>                          Suppress the pull output
      --read-only                      Mount the container&#39;s root filesystem as <span class="token builtin class-name">read</span> only
      <span class="token parameter variable">--restart</span> string                 Restart policy to apply when a container exits <span class="token punctuation">(</span>default <span class="token string">&quot;no&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--rm</span>                             Automatically remove the container when it exits
      <span class="token parameter variable">--runtime</span> string                 Runtime to use <span class="token keyword">for</span> this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --sig-proxy                      Proxy received signals to the process <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
      --stop-signal string             Signal to stop the container
      --stop-timeout int               Timeout <span class="token punctuation">(</span>in seconds<span class="token punctuation">)</span> to stop a container
      --storage-opt list               Storage driver options <span class="token keyword">for</span> the container
      <span class="token parameter variable">--sysctl</span> map                     Sysctl options <span class="token punctuation">(</span>default map<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--tmpfs</span> list                     Mount a tmpfs directory
  -t, <span class="token parameter variable">--tty</span>                            Allocate a pseudo-TTY
      <span class="token parameter variable">--ulimit</span> <span class="token builtin class-name">ulimit</span>                  Ulimit options <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  -u, <span class="token parameter variable">--user</span> string                    Username or <span class="token environment constant">UID</span> <span class="token punctuation">(</span>format: <span class="token operator">&lt;</span>name<span class="token operator">|</span>uid<span class="token operator">&gt;</span><span class="token punctuation">[</span>:<span class="token operator">&lt;</span>group<span class="token operator">|</span>gid<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--userns</span> string                  User namespace to use
      <span class="token parameter variable">--uts</span> string                     UTS namespace to use
  -v, <span class="token parameter variable">--volume</span> list                    Bind <span class="token function">mount</span> a volume
      --volume-driver string           Optional volume driver <span class="token keyword">for</span> the container
      --volumes-from list              Mount volumes from the specified container<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
  -w, <span class="token parameter variable">--workdir</span> string                 Working directory inside the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="以交互的方式运行容器" tabindex="-1"><a class="header-anchor" href="#以交互的方式运行容器" aria-hidden="true">#</a> 以交互的方式运行容器</h2><p>[option]:-it 即为选择交互方式运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token parameter variable">-it</span> image <span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token punctuation">[</span>args<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> ubuntu</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myubuntu <span class="token parameter variable">-it</span> ubuntu /bin/bas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> tomcat</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mytomcat <span class="token parameter variable">-it</span> tomcat<span class="token punctuation">[</span>:tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="以分离模式运行容器" tabindex="-1"><a class="header-anchor" href="#以分离模式运行容器" aria-hidden="true">#</a> 以分离模式运行容器</h2><h3 id="tomcat-1" tabindex="-1"><a class="header-anchor" href="#tomcat-1" aria-hidden="true">#</a> tomcat</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token parameter variable">-dp</span> <span class="token number">80</span>:8080 tomcat<span class="token punctuation">[</span>:tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="start-命令" tabindex="-1"><a class="header-anchor" href="#start-命令" aria-hidden="true">#</a> start 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> start <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Start one or <span class="token function">more</span> stopped containers

Aliases:
  <span class="token function">docker</span> container start, <span class="token function">docker</span> start

Options:
  -a, <span class="token parameter variable">--attach</span>               Attach STDOUT/STDERR and forward signals
      --detach-keys string   Override the key sequence <span class="token keyword">for</span> detaching a container
  -i, <span class="token parameter variable">--interactive</span>          Attach container&#39;s STDIN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restart-命令" tabindex="-1"><a class="header-anchor" href="#restart-命令" aria-hidden="true">#</a> restart 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> restart <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Restart one or <span class="token function">more</span> containers

Aliases:
  <span class="token function">docker</span> container restart, <span class="token function">docker</span> restart

Options:
  -s, <span class="token parameter variable">--signal</span> string   Signal to send to the container
  -t, <span class="token parameter variable">--time</span> int        Seconds to <span class="token function">wait</span> before killing the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-命令" tabindex="-1"><a class="header-anchor" href="#create-命令" aria-hidden="true">#</a> create 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> create <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Create a new container

Aliases:
  <span class="token function">docker</span> container create, <span class="token function">docker</span> create

Options:
      --add-host list                  Add a custom host-to-IP mapping <span class="token punctuation">(</span>host:ip<span class="token punctuation">)</span>
      <span class="token parameter variable">--annotation</span> map                 Add an annotation to the container <span class="token punctuation">(</span>passed
                                       through to the OCI runtime<span class="token punctuation">)</span> <span class="token punctuation">(</span>default map<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  -a, <span class="token parameter variable">--attach</span> list                    Attach to STDIN, STDOUT or STDERR
      --blkio-weight uint16            Block IO <span class="token punctuation">(</span>relative weight<span class="token punctuation">)</span>, between <span class="token number">10</span> and
                                       <span class="token number">1000</span>, or <span class="token number">0</span> to disable <span class="token punctuation">(</span>default <span class="token number">0</span><span class="token punctuation">)</span>
      --blkio-weight-device list       Block IO weight <span class="token punctuation">(</span>relative device weight<span class="token punctuation">)</span>
                                       <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --cap-add list                   Add Linux capabilities
      --cap-drop list                  Drop Linux capabilities
      --cgroup-parent string           Optional parent cgroup <span class="token keyword">for</span> the container
      <span class="token parameter variable">--cgroupns</span> string                Cgroup namespace to use <span class="token punctuation">(</span>host<span class="token operator">|</span>private<span class="token punctuation">)</span>
                                       <span class="token string">&#39;host&#39;</span><span class="token builtin class-name">:</span>    Run the container <span class="token keyword">in</span> the Docker
                                       <span class="token function">host</span><span class="token string">&#39;s cgroup namespace
                                       &#39;</span>private<span class="token string">&#39;: Run the container in its own
                                       private cgroup namespace
                                       &#39;</span>&#39;:        Use the cgroup namespace as
                                       configured by the
                                                  default-cgroupns-mode option on
                                       the daemon <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
      <span class="token parameter variable">--cidfile</span> string                 Write the container ID to the <span class="token function">file</span>
      --cpu-period int                 Limit CPU CFS <span class="token punctuation">(</span>Completely Fair Scheduler<span class="token punctuation">)</span>
                                       period
      --cpu-quota int                  Limit CPU CFS <span class="token punctuation">(</span>Completely Fair Scheduler<span class="token punctuation">)</span> <span class="token function">quota</span>
      --cpu-rt-period int              Limit CPU real-time period <span class="token keyword">in</span> microseconds
      --cpu-rt-runtime int             Limit CPU real-time runtime <span class="token keyword">in</span> microseconds
  -c, --cpu-shares int                 CPU shares <span class="token punctuation">(</span>relative weight<span class="token punctuation">)</span>
      <span class="token parameter variable">--cpus</span> decimal                   Number of CPUs
      --cpuset-cpus string             CPUs <span class="token keyword">in</span> <span class="token function">which</span> to allow execution <span class="token punctuation">(</span><span class="token number">0</span>-3, <span class="token number">0,1</span><span class="token punctuation">)</span>
      --cpuset-mems string             MEMs <span class="token keyword">in</span> <span class="token function">which</span> to allow execution <span class="token punctuation">(</span><span class="token number">0</span>-3, <span class="token number">0,1</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--device</span> list                    Add a <span class="token function">host</span> device to the container
      --device-cgroup-rule list        Add a rule to the cgroup allowed devices list
      --device-read-bps list           Limit <span class="token builtin class-name">read</span> rate <span class="token punctuation">(</span>bytes per second<span class="token punctuation">)</span> from a
                                       device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --device-read-iops list          Limit <span class="token builtin class-name">read</span> rate <span class="token punctuation">(</span>IO per second<span class="token punctuation">)</span> from a
                                       device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --device-write-bps list          Limit <span class="token function">write</span> rate <span class="token punctuation">(</span>bytes per second<span class="token punctuation">)</span> to a
                                       device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --device-write-iops list         Limit <span class="token function">write</span> rate <span class="token punctuation">(</span>IO per second<span class="token punctuation">)</span> to a
                                       device <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --disable-content-trust          Skip image verification <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--dns</span> list                       Set custom DNS servers
      --dns-option list                Set DNS options
      --dns-search list                Set custom DNS search domains
      <span class="token parameter variable">--domainname</span> string              Container NIS domain name
      <span class="token parameter variable">--entrypoint</span> string              Overwrite the default ENTRYPOINT of the image
  -e, <span class="token parameter variable">--env</span> list                       Set environment variables
      --env-file list                  Read <span class="token keyword">in</span> a <span class="token function">file</span> of environment variables
      <span class="token parameter variable">--expose</span> list                    Expose a port or a range of ports
      <span class="token parameter variable">--gpus</span> gpu-request               GPU devices to <span class="token function">add</span> to the container <span class="token punctuation">(</span><span class="token string">&#39;all&#39;</span>
                                       to pass all GPUs<span class="token punctuation">)</span>
      --group-add list                 Add additional <span class="token function">groups</span> to <span class="token function">join</span>
      --health-cmd string              Command to run to check health
      --health-interval duration       Time between running the check <span class="token punctuation">(</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span>
                                       <span class="token punctuation">(</span>default 0s<span class="token punctuation">)</span>
      --health-retries int             Consecutive failures needed to report unhealthy
      --health-start-period duration   Start period <span class="token keyword">for</span> the container to
                                       initialize before starting health-retries
                                       countdown <span class="token punctuation">(</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span> <span class="token punctuation">(</span>default 0s<span class="token punctuation">)</span>
      --health-timeout duration        Maximum <span class="token function">time</span> to allow one check to run
                                       <span class="token punctuation">(</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span> <span class="token punctuation">(</span>default 0s<span class="token punctuation">)</span>
      <span class="token parameter variable">--help</span>                           Print usage
  -h, <span class="token parameter variable">--hostname</span> string                Container <span class="token function">host</span> name
      <span class="token parameter variable">--init</span>                           Run an init inside the container that
                                       forwards signals and reaps processes
  -i, <span class="token parameter variable">--interactive</span>                    Keep STDIN <span class="token function">open</span> even <span class="token keyword">if</span> not attached
      <span class="token parameter variable">--ip</span> string                      IPv4 address <span class="token punctuation">(</span>e.g., <span class="token number">172.30</span>.100.104<span class="token punctuation">)</span>
      <span class="token parameter variable">--ip6</span> string                     IPv6 address <span class="token punctuation">(</span>e.g., <span class="token number">2001</span>:db8::33<span class="token punctuation">)</span>
      <span class="token parameter variable">--ipc</span> string                     IPC mode to use
      <span class="token parameter variable">--isolation</span> string               Container isolation technology
      --kernel-memory bytes            Kernel memory limit
  -l, <span class="token parameter variable">--label</span> list                     Set meta data on a container
      --label-file list                Read <span class="token keyword">in</span> a line delimited <span class="token function">file</span> of labels
      <span class="token parameter variable">--link</span> list                      Add <span class="token function">link</span> to another container
      --link-local-ip list             Container IPv4/IPv6 link-local addresses
      --log-driver string              Logging driver <span class="token keyword">for</span> the container
      --log-opt list                   Log driver options
      --mac-address string             Container MAC address <span class="token punctuation">(</span>e.g., <span class="token number">92</span>:d0:c6:0a:29:33<span class="token punctuation">)</span>
  -m, <span class="token parameter variable">--memory</span> bytes                   Memory limit
      --memory-reservation bytes       Memory soft limit
      --memory-swap bytes              Swap limit equal to memory plus swap: <span class="token string">&#39;-1&#39;</span>
                                       to <span class="token builtin class-name">enable</span> unlimited swap
      --memory-swappiness int          Tune container memory swappiness <span class="token punctuation">(</span><span class="token number">0</span> to
                                       <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>default -1<span class="token punctuation">)</span>
      <span class="token parameter variable">--mount</span> <span class="token function">mount</span>                    Attach a filesystem <span class="token function">mount</span> to the container
      <span class="token parameter variable">--name</span> string                    Assign a name to the container
      <span class="token parameter variable">--network</span> network                Connect a container to a network
      --network-alias list             Add network-scoped <span class="token builtin class-name">alias</span> <span class="token keyword">for</span> the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune <span class="token function">host</span><span class="token string">&#39;s OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for
                                       unlimited)
      --platform string                Set platform if server is multi-platform
                                       capable
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container&#39;</span>s port<span class="token punctuation">(</span>s<span class="token punctuation">)</span> to the <span class="token function">host</span>
  -P, --publish-all                    Publish all exposed ports to random ports
      <span class="token parameter variable">--pull</span> string                    Pull image before creating <span class="token punctuation">(</span><span class="token string">&quot;always&quot;</span>,
                                       <span class="token string">&quot;|missing&quot;</span>, <span class="token string">&quot;never&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>default <span class="token string">&quot;missing&quot;</span><span class="token punctuation">)</span>
  -q, <span class="token parameter variable">--quiet</span>                          Suppress the pull output
      --read-only                      Mount the container&#39;s root filesystem as
                                       <span class="token builtin class-name">read</span> only
      <span class="token parameter variable">--restart</span> string                 Restart policy to apply when a container
                                       exits <span class="token punctuation">(</span>default <span class="token string">&quot;no&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--rm</span>                             Automatically remove the container when it
                                       exits
      <span class="token parameter variable">--runtime</span> string                 Runtime to use <span class="token keyword">for</span> this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --stop-signal string             Signal to stop the container
      --stop-timeout int               Timeout <span class="token punctuation">(</span>in seconds<span class="token punctuation">)</span> to stop a container
      --storage-opt list               Storage driver options <span class="token keyword">for</span> the container
      <span class="token parameter variable">--sysctl</span> map                     Sysctl options <span class="token punctuation">(</span>default map<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--tmpfs</span> list                     Mount a tmpfs directory
  -t, <span class="token parameter variable">--tty</span>                            Allocate a pseudo-TTY
      <span class="token parameter variable">--ulimit</span> <span class="token builtin class-name">ulimit</span>                  Ulimit options <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  -u, <span class="token parameter variable">--user</span> string                    Username or <span class="token environment constant">UID</span> <span class="token punctuation">(</span>format:
                                       <span class="token operator">&lt;</span>name<span class="token operator">|</span>uid<span class="token operator">&gt;</span><span class="token punctuation">[</span>:<span class="token operator">&lt;</span>group<span class="token operator">|</span>gid<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--userns</span> string                  User namespace to use
      <span class="token parameter variable">--uts</span> string                     UTS namespace to use
  -v, <span class="token parameter variable">--volume</span> list                    Bind <span class="token function">mount</span> a volume
      --volume-driver string           Optional volume driver <span class="token keyword">for</span> the container
      --volumes-from list              Mount volumes from the specified container<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
  -w, <span class="token parameter variable">--workdir</span> string                 Working directory inside the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ps-命令" tabindex="-1"><a class="header-anchor" href="#ps-命令" aria-hidden="true">#</a> ps 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

List containers

Aliases:
  <span class="token function">docker</span> container ls, <span class="token function">docker</span> container list, <span class="token function">docker</span> container ps, <span class="token function">docker</span> <span class="token function">ps</span>

Options:
  -a, <span class="token parameter variable">--all</span>             Show all containers <span class="token punctuation">(</span>default shows just running<span class="token punctuation">)</span>
  -f, <span class="token parameter variable">--filter</span> filter   Filter output based on conditions provided
      <span class="token parameter variable">--format</span> string   Format output using a custom template:
                        <span class="token string">&#39;table&#39;</span><span class="token builtin class-name">:</span>            Print output <span class="token keyword">in</span> table <span class="token function">format</span> with <span class="token function">column</span> headers
                        <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
                        <span class="token string">&#39;table TEMPLATE&#39;</span><span class="token builtin class-name">:</span>   Print output <span class="token keyword">in</span> table <span class="token function">format</span> using the given Go
                        template
                        <span class="token string">&#39;json&#39;</span><span class="token builtin class-name">:</span>             Print <span class="token keyword">in</span> JSON <span class="token function">format</span>
                        <span class="token string">&#39;TEMPLATE&#39;</span><span class="token builtin class-name">:</span>         Print output using the given Go template.
                        Refer to https://docs.docker.com/go/formatting/ <span class="token keyword">for</span> <span class="token function">more</span> information
                        about formatting output with templates
  -n, <span class="token parameter variable">--last</span> int        Show n last created containers <span class="token punctuation">(</span>includes all states<span class="token punctuation">)</span> <span class="token punctuation">(</span>default -1<span class="token punctuation">)</span>
  -l, <span class="token parameter variable">--latest</span>          Show the latest created container <span class="token punctuation">(</span>includes all states<span class="token punctuation">)</span>
      --no-trunc        Don&#39;t truncate output
  -q, <span class="token parameter variable">--quiet</span>           Only display container IDs
  -s, <span class="token parameter variable">--size</span>            Display total <span class="token function">file</span> sizes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exec-命令" tabindex="-1"><a class="header-anchor" href="#exec-命令" aria-hidden="true">#</a> exec 命令</h2><p>生成副本去操作容器，退出不影响容器运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER COMMAND <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Execute a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a running container

Aliases:
  <span class="token function">docker</span> container exec, <span class="token function">docker</span> <span class="token builtin class-name">exec</span>

Options:
  -d, <span class="token parameter variable">--detach</span>               Detached mode: run <span class="token builtin class-name">command</span> <span class="token keyword">in</span> the background
      --detach-keys string   Override the key sequence <span class="token keyword">for</span> detaching a
                             container
  -e, <span class="token parameter variable">--env</span> list             Set environment variables
      --env-file list        Read <span class="token keyword">in</span> a <span class="token function">file</span> of environment variables
  -i, <span class="token parameter variable">--interactive</span>          Keep STDIN <span class="token function">open</span> even <span class="token keyword">if</span> not attached
      <span class="token parameter variable">--privileged</span>           Give extended privileges to the <span class="token builtin class-name">command</span>
  -t, <span class="token parameter variable">--tty</span>                  Allocate a pseudo-TTY
  -u, <span class="token parameter variable">--user</span> string          Username or <span class="token environment constant">UID</span> <span class="token punctuation">(</span>format:
                             <span class="token string">&quot;&lt;name|uid&gt;[:&lt;group|gid&gt;]&quot;</span><span class="token punctuation">)</span>
  -w, <span class="token parameter variable">--workdir</span> string       Working directory inside the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="attach-命令" tabindex="-1"><a class="header-anchor" href="#attach-命令" aria-hidden="true">#</a> attach 命令</h2><p>同步输入输出流到容器，退出时也会结束容器进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> attach <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> attach <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER

Attach <span class="token builtin class-name">local</span> standard input, output, and error streams to a running container

Aliases:
  <span class="token function">docker</span> container attach, <span class="token function">docker</span> attach

Options:
      --detach-keys string   Override the key sequence <span class="token keyword">for</span> detaching a
                             container
      --no-stdin             Do not attach STDIN
      --sig-proxy            Proxy all received signals to the process
                             <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top-命令" tabindex="-1"><a class="header-anchor" href="#top-命令" aria-hidden="true">#</a> top 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token function">top</span> CONTAINER <span class="token punctuation">[</span>ps OPTIONS<span class="token punctuation">]</span>

Display the running processes of a container

Aliases:
  <span class="token function">docker</span> container top, <span class="token function">docker</span> <span class="token function">top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pause-命令" tabindex="-1"><a class="header-anchor" href="#pause-命令" aria-hidden="true">#</a> pause 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pause <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> pause CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Pause all processes within one or <span class="token function">more</span> containers

Aliases:
  <span class="token function">docker</span> container pause, <span class="token function">docker</span> pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unpause-命令" tabindex="-1"><a class="header-anchor" href="#unpause-命令" aria-hidden="true">#</a> unpause 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> unpause <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> unpause CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Unpause all processes within one or <span class="token function">more</span> containers

Aliases:
  <span class="token function">docker</span> container unpause, <span class="token function">docker</span> unpause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stop-命令" tabindex="-1"><a class="header-anchor" href="#stop-命令" aria-hidden="true">#</a> stop 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> stop <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Stop one or <span class="token function">more</span> running containers

Aliases:
  <span class="token function">docker</span> container stop, <span class="token function">docker</span> stop

Options:
  -s, <span class="token parameter variable">--signal</span> string   Signal to send to the container
  -t, <span class="token parameter variable">--time</span> int        Seconds to <span class="token function">wait</span> before killing the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kill-命令" tabindex="-1"><a class="header-anchor" href="#kill-命令" aria-hidden="true">#</a> kill 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">kill</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token function">kill</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Kill one or <span class="token function">more</span> running containers

Aliases:
  <span class="token function">docker</span> container kill, <span class="token function">docker</span> <span class="token function">kill</span>

Options:
  -s, <span class="token parameter variable">--signal</span> string   Signal to send to the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logs-命令" tabindex="-1"><a class="header-anchor" href="#logs-命令" aria-hidden="true">#</a> logs 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> logs <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER

Fetch the logs of a container

Aliases:
  <span class="token function">docker</span> container logs, <span class="token function">docker</span> logs

Options:
      <span class="token parameter variable">--details</span>        Show extra details provided to logs
  -f, <span class="token parameter variable">--follow</span>         Follow log output
      <span class="token parameter variable">--since</span> string   Show logs since timestamp <span class="token punctuation">(</span>e.g.
                       <span class="token string">&quot;2013-01-02T13:23:37Z&quot;</span><span class="token punctuation">)</span> or relative <span class="token punctuation">(</span>e.g. <span class="token string">&quot;42m&quot;</span>
                       <span class="token keyword">for</span> <span class="token number">42</span> minutes<span class="token punctuation">)</span>
  -n, <span class="token parameter variable">--tail</span> string    Number of lines to show from the end of the logs
                       <span class="token punctuation">(</span>default <span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--timestamps</span>     Show timestamps
      <span class="token parameter variable">--until</span> string   Show logs before a timestamp <span class="token punctuation">(</span>e.g.
                       <span class="token string">&quot;2013-01-02T13:23:37Z&quot;</span><span class="token punctuation">)</span> or relative <span class="token punctuation">(</span>e.g. <span class="token string">&quot;42m&quot;</span>
                       <span class="token keyword">for</span> <span class="token number">42</span> minutes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cp-命令" tabindex="-1"><a class="header-anchor" href="#cp-命令" aria-hidden="true">#</a> cp 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER:SRC_PATH DEST_PATH<span class="token operator">|</span>-
        <span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> SRC_PATH<span class="token operator">|</span>- CONTAINER:DEST_PATH

Copy files/folders between a container and the <span class="token builtin class-name">local</span> filesystem

Use <span class="token string">&#39;-&#39;</span> as the <span class="token builtin class-name">source</span> to <span class="token builtin class-name">read</span> a <span class="token function">tar</span> archive from stdin
and extract it to a directory destination <span class="token keyword">in</span> a container.
Use <span class="token string">&#39;-&#39;</span> as the destination to stream a <span class="token function">tar</span> archive of a
container <span class="token builtin class-name">source</span> to stdout.

Aliases:
  <span class="token function">docker</span> container cp, <span class="token function">docker</span> <span class="token function">cp</span>

Options:
  -a, <span class="token parameter variable">--archive</span>       Archive mode <span class="token punctuation">(</span>copy all uid/gid information<span class="token punctuation">)</span>
  -L, --follow-link   Always follow symbol <span class="token function">link</span> <span class="token keyword">in</span> SRC_PATH
  -q, <span class="token parameter variable">--quiet</span>         Suppress progress output during copy. Progress
                      output is automatically suppressed <span class="token keyword">if</span> no terminal
                      is attached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rm-命令" tabindex="-1"><a class="header-anchor" href="#rm-命令" aria-hidden="true">#</a> rm 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>CONTAINER<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Remove one or <span class="token function">more</span> containers

Aliases:
  <span class="token function">docker</span> container rm, <span class="token function">docker</span> container remove, <span class="token function">docker</span> <span class="token function">rm</span>

Options:
  -f, <span class="token parameter variable">--force</span>     Force the removal of a running container <span class="token punctuation">(</span>uses SIGKILL<span class="token punctuation">)</span>
  -l, <span class="token parameter variable">--link</span>      Remove the specified <span class="token function">link</span>
  -v, <span class="token parameter variable">--volumes</span>   Remove anonymous volumes associated with the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inspect-命令" tabindex="-1"><a class="header-anchor" href="#inspect-命令" aria-hidden="true">#</a> inspect 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> inspect <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NAME<span class="token operator">|</span>ID <span class="token punctuation">[</span>NAME<span class="token operator">|</span>ID<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Return low-level information on Docker objects

Options:
  -f, <span class="token parameter variable">--format</span> string   Format output using a custom template:
                        <span class="token string">&#39;json&#39;</span><span class="token builtin class-name">:</span>             Print <span class="token keyword">in</span> JSON <span class="token function">format</span>
                        <span class="token string">&#39;TEMPLATE&#39;</span><span class="token builtin class-name">:</span>         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        <span class="token keyword">for</span> <span class="token function">more</span> information about formatting output with
                        templates
  -s, <span class="token parameter variable">--size</span>            Display total <span class="token function">file</span> sizes <span class="token keyword">if</span> the <span class="token builtin class-name">type</span> is container
      <span class="token parameter variable">--type</span> string     Return JSON <span class="token keyword">for</span> specified <span class="token builtin class-name">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commit-命令" tabindex="-1"><a class="header-anchor" href="#commit-命令" aria-hidden="true">#</a> commit 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> commit <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>

Create a new image from a container&#39;s changes

Aliases:
  <span class="token function">docker</span> container commit, <span class="token function">docker</span> commit

Options:
  -a, <span class="token parameter variable">--author</span> string    Author <span class="token punctuation">(</span>e.g., <span class="token string">&quot;John Hannibal Smith
                         &lt;hannibal@a-team.com&gt;&quot;</span><span class="token punctuation">)</span>
  -c, <span class="token parameter variable">--change</span> list      Apply Dockerfile instruction to the created image
  -m, <span class="token parameter variable">--message</span> string   Commit message
  -p, <span class="token parameter variable">--pause</span>            Pause container during commit <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="save-命令" tabindex="-1"><a class="header-anchor" href="#save-命令" aria-hidden="true">#</a> save 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> save <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> save <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Save one or <span class="token function">more</span> images to a <span class="token function">tar</span> archive <span class="token punctuation">(</span>streamed to STDOUT by default<span class="token punctuation">)</span>

Aliases:
  <span class="token function">docker</span> image save, <span class="token function">docker</span> save

Options:
  -o, <span class="token parameter variable">--output</span> string   Write to a file, instead of STDOUT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="load-命令" tabindex="-1"><a class="header-anchor" href="#load-命令" aria-hidden="true">#</a> load 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> load <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

Load an image from a <span class="token function">tar</span> archive or STDIN

Aliases:
  <span class="token function">docker</span> image load, <span class="token function">docker</span> load

Options:
  -i, <span class="token parameter variable">--input</span> string   Read from <span class="token function">tar</span> archive file, instead of STDIN
  -q, <span class="token parameter variable">--quiet</span>          Suppress the load output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入导出镜像命令" tabindex="-1"><a class="header-anchor" href="#导入导出镜像命令" aria-hidden="true">#</a> 导入导出镜像命令</h2><h3 id="详解" tabindex="-1"><a class="header-anchor" href="#详解" aria-hidden="true">#</a> 详解</h3><h2 id="export-命令" tabindex="-1"><a class="header-anchor" href="#export-命令" aria-hidden="true">#</a> export 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER

Export a container&#39;s filesystem as a <span class="token function">tar</span> archive

Aliases:
  <span class="token function">docker</span> container export, <span class="token function">docker</span> <span class="token builtin class-name">export</span>

Options:
  -o, <span class="token parameter variable">--output</span> string   Write to a file, instead of STDOUT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import-命令" tabindex="-1"><a class="header-anchor" href="#import-命令" aria-hidden="true">#</a> import 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">import</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token function">import</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token function">file</span><span class="token operator">|</span>URL<span class="token operator">|</span>- <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>

Import the contents from a tarball to create a filesystem image

Aliases:
  <span class="token function">docker</span> image import, <span class="token function">docker</span> <span class="token function">import</span>

Options:
  -c, <span class="token parameter variable">--change</span> list       Apply Dockerfile instruction to the created image
  -m, <span class="token parameter variable">--message</span> string    Set commit message <span class="token keyword">for</span> imported image
      <span class="token parameter variable">--platform</span> string   Set platform <span class="token keyword">if</span> server is multi-platform capable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入导出容器命令" tabindex="-1"><a class="header-anchor" href="#导入导出容器命令" aria-hidden="true">#</a> 导入导出容器命令</h2><h3 id="详解-1" tabindex="-1"><a class="header-anchor" href="#详解-1" aria-hidden="true">#</a> 详解</h3><h3 id="容器镜像的导入导出对比" tabindex="-1"><a class="header-anchor" href="#容器镜像的导入导出对比" aria-hidden="true">#</a> 容器镜像的导入导出对比</h3><h4 id="export-save" tabindex="-1"><a class="header-anchor" href="#export-save" aria-hidden="true">#</a> export/save</h4><ul><li>export 作用于容器，save 作用于镜像，但是导出文件都为 tar 文件</li><li>export 一次只能导出一个容器，save 一次可以对多个镜像进行导出</li><li>export 只是对当前容器的文件系统快照进行导出，其会丢失原镜像的所有历史记录和元数据信息，save 则是保存了原镜像的完整记录</li></ul><h4 id="import-load" tabindex="-1"><a class="header-anchor" href="#import-load" aria-hidden="true">#</a> import/load</h4><ul><li>import 导入的是容器包；load 加载的是镜像包，但是最终都会恢复成镜像</li><li>import 恢复的镜像只包含当前镜像一层,镜像分层合并层；load 恢复的镜像与原镜像是完全相同的，镜像分层信息一致</li><li>import 恢复的镜像就是新构建的镜像，与原镜像的 ImageID 不同；load 恢复的镜像与原镜像是同一个镜像，即 ImageID 相同</li><li>import 可以导入的镜像指定 repository 与 tag，load 加载的镜像不能指定，于原镜像相同</li></ul><h4 id="export-import-commit" tabindex="-1"><a class="header-anchor" href="#export-import-commit" aria-hidden="true">#</a> export&amp;import/commit</h4><ul><li>相同点：export + import 会将一个容器变为一个镜像，commit 也可以</li><li>不同点：export + import 恢复的镜像仅包含原容器生成的一层分层，commit 生成的镜像中包含容器的原镜像的所有分层信息</li></ul><h2 id="history-命令" tabindex="-1"><a class="header-anchor" href="#history-命令" aria-hidden="true">#</a> history 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">history</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> <span class="token function">history</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE

Show the <span class="token function">history</span> of an image

Aliases:
  <span class="token function">docker</span> image history, <span class="token function">docker</span> <span class="token function">history</span>

Options:
      <span class="token parameter variable">--format</span> string   Format output using a custom template:
                        <span class="token string">&#39;table&#39;</span><span class="token builtin class-name">:</span>            Print output <span class="token keyword">in</span> table <span class="token function">format</span>
                        with <span class="token function">column</span> headers <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
                        <span class="token string">&#39;table TEMPLATE&#39;</span><span class="token builtin class-name">:</span>   Print output <span class="token keyword">in</span> table <span class="token function">format</span>
                        using the given Go template
                        <span class="token string">&#39;json&#39;</span><span class="token builtin class-name">:</span>             Print <span class="token keyword">in</span> JSON <span class="token function">format</span>
                        <span class="token string">&#39;TEMPLATE&#39;</span><span class="token builtin class-name">:</span>         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        <span class="token keyword">for</span> <span class="token function">more</span> information about formatting output with
                        templates
  -H, <span class="token parameter variable">--human</span>           Print sizes and dates <span class="token keyword">in</span> human readable <span class="token function">format</span>
                        <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
      --no-trunc        Don&#39;t truncate output
  -q, <span class="token parameter variable">--quiet</span>           Only show image IDs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="system-命令-命令集" tabindex="-1"><a class="header-anchor" href="#system-命令-命令集" aria-hidden="true">#</a> system 命令 | 命令集</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system COMMAND <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> system COMMAND

Manage Docker

Commands:
  <span class="token function">df</span>          Show <span class="token function">docker</span> disk usage
  events      Get real <span class="token function">time</span> events from the server
  info        Display system-wide information
  prune       Remove unused data

Run <span class="token string">&#39;docker system COMMAND --help&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information on a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点理解 prune 命令</p><h3 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system <span class="token function">df</span> <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> system <span class="token function">df</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

Show <span class="token function">docker</span> disk usage

Options:
      <span class="token parameter variable">--format</span> string   Format output using a custom template:
                        <span class="token string">&#39;table&#39;</span><span class="token builtin class-name">:</span>            Print output <span class="token keyword">in</span> table <span class="token function">format</span>
                        with <span class="token function">column</span> headers <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
                        <span class="token string">&#39;table TEMPLATE&#39;</span><span class="token builtin class-name">:</span>   Print output <span class="token keyword">in</span> table <span class="token function">format</span>
                        using the given Go template
                        <span class="token string">&#39;json&#39;</span><span class="token builtin class-name">:</span>             Print <span class="token keyword">in</span> JSON <span class="token function">format</span>
                        <span class="token string">&#39;TEMPLATE&#39;</span><span class="token builtin class-name">:</span>         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        <span class="token keyword">for</span> <span class="token function">more</span> information about formatting output with
                        templates
  -v, <span class="token parameter variable">--verbose</span>         Show detailed information on space usage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> events</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system events <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> system events <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

Get real <span class="token function">time</span> events from the server

Aliases:
  <span class="token function">docker</span> system events, <span class="token function">docker</span> events

Options:
  -f, <span class="token parameter variable">--filter</span> filter   Filter output based on conditions provided
      <span class="token parameter variable">--format</span> string   Format the output using the given Go template
      <span class="token parameter variable">--since</span> string    Show all events created since timestamp
      <span class="token parameter variable">--until</span> string    Stream events <span class="token keyword">until</span> this timestamp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system info <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> system info <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

Display system-wide information

Aliases:
  <span class="token function">docker</span> system info, <span class="token function">docker</span> info

Options:
  -f, <span class="token parameter variable">--format</span> string   Format output using a custom template:
                        <span class="token string">&#39;json&#39;</span><span class="token builtin class-name">:</span>             Print <span class="token keyword">in</span> JSON <span class="token function">format</span>
                        <span class="token string">&#39;TEMPLATE&#39;</span><span class="token builtin class-name">:</span>         Print output using the given
                        Go template.
                        Refer to https://docs.docker.com/go/formatting/
                        <span class="token keyword">for</span> <span class="token function">more</span> information about formatting output with
                        templates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prune" tabindex="-1"><a class="header-anchor" href="#prune" aria-hidden="true">#</a> prune</h3><p>重点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system prune <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> system prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

Remove unused data

Options:
  -a, <span class="token parameter variable">--all</span>             Remove all unused images not just dangling ones
      <span class="token parameter variable">--filter</span> filter   Provide filter values <span class="token punctuation">(</span>e.g. <span class="token string">&quot;label=&lt;key&gt;=&lt;value&gt;&quot;</span><span class="token punctuation">)</span>
  -f, <span class="token parameter variable">--force</span>           Do not prompt <span class="token keyword">for</span> confirmation
      <span class="token parameter variable">--volumes</span>         Prune volumes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-命令" tabindex="-1"><a class="header-anchor" href="#build-命令" aria-hidden="true">#</a> build 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> buildx build <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token environment constant">PATH</span> <span class="token operator">|</span> URL <span class="token operator">|</span> -

Start a build

Aliases:
  <span class="token function">docker</span> buildx build, <span class="token function">docker</span> buildx b

Options:
      --add-host strings              Add a custom host-to-IP mapping
                                      <span class="token punctuation">(</span>format: <span class="token string">&quot;host:ip&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--allow</span> strings                 Allow extra privileged entitlement
                                      <span class="token punctuation">(</span>e.g., <span class="token string">&quot;network.host&quot;</span>,
                                      <span class="token string">&quot;security.insecure&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--attest</span> stringArray            Attestation parameters <span class="token punctuation">(</span>format:
                                      <span class="token string">&quot;type=sbom,generator=image&quot;</span><span class="token punctuation">)</span>
      --build-arg stringArray         Set build-time variables
      --build-context stringArray     Additional build contexts <span class="token punctuation">(</span>e.g.,
                                      <span class="token assign-left variable">name</span><span class="token operator">=</span>path<span class="token punctuation">)</span>
      <span class="token parameter variable">--builder</span> string                Override the configured builder
                                      instance <span class="token punctuation">(</span>default <span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
      --cache-from stringArray        External cache sources <span class="token punctuation">(</span>e.g.,
                                      <span class="token string">&quot;user/app:cache&quot;</span>,
                                      <span class="token string">&quot;type=local,src=path/to/dir&quot;</span><span class="token punctuation">)</span>
      --cache-to stringArray          Cache <span class="token builtin class-name">export</span> destinations <span class="token punctuation">(</span>e.g.,
                                      <span class="token string">&quot;user/app:cache&quot;</span>,
                                      <span class="token string">&quot;type=local,dest=path/to/dir&quot;</span><span class="token punctuation">)</span>
      --cgroup-parent string          Optional parent cgroup <span class="token keyword">for</span> the container
  -f, <span class="token parameter variable">--file</span> string                   Name of the Dockerfile <span class="token punctuation">(</span>default:
                                      <span class="token string">&quot;PATH/Dockerfile&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--iidfile</span> string                Write the image ID to the <span class="token function">file</span>
      <span class="token parameter variable">--label</span> stringArray             Set metadata <span class="token keyword">for</span> an image
      <span class="token parameter variable">--load</span>                          Shorthand <span class="token keyword">for</span> <span class="token string">&quot;--output=type=docker&quot;</span>
      --metadata-file string          Write build result metadata to the <span class="token function">file</span>
      <span class="token parameter variable">--network</span> string                Set the networking mode <span class="token keyword">for</span> the
                                      <span class="token string">&quot;RUN&quot;</span> instructions during build
                                      <span class="token punctuation">(</span>default <span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
      --no-cache                      Do not use cache when building the image
      --no-cache-filter stringArray   Do not cache specified stages
  -o, <span class="token parameter variable">--output</span> stringArray            Output destination <span class="token punctuation">(</span>format:
                                      <span class="token string">&quot;type=local,dest=path&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--platform</span> stringArray          Set target platform <span class="token keyword">for</span> build
      <span class="token parameter variable">--progress</span> string               Set <span class="token builtin class-name">type</span> of progress output
                                      <span class="token punctuation">(</span><span class="token string">&quot;auto&quot;</span>, <span class="token string">&quot;plain&quot;</span>, <span class="token string">&quot;tty&quot;</span><span class="token punctuation">)</span>. Use plain
                                      to show container output <span class="token punctuation">(</span>default
                                      <span class="token string">&quot;auto&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--provenance</span> string             Shorthand <span class="token keyword">for</span> <span class="token string">&quot;--attest=type=provenance&quot;</span>
      <span class="token parameter variable">--pull</span>                          Always attempt to pull all
                                      referenced images
      <span class="token parameter variable">--push</span>                          Shorthand <span class="token keyword">for</span> <span class="token string">&quot;--output=type=registry&quot;</span>
  -q, <span class="token parameter variable">--quiet</span>                         Suppress the build output and print
                                      image ID on success
      <span class="token parameter variable">--sbom</span> string                   Shorthand <span class="token keyword">for</span> <span class="token string">&quot;--attest=type=sbom&quot;</span>
      <span class="token parameter variable">--secret</span> stringArray            Secret to expose to the build
                                      <span class="token punctuation">(</span>format:
                                      <span class="token string">&quot;id=mysecret[,src=/local/secret]&quot;</span><span class="token punctuation">)</span>
      --shm-size bytes                Size of <span class="token string">&quot;/dev/shm&quot;</span>
      <span class="token parameter variable">--ssh</span> stringArray               SSH agent socket or keys to expose
                                      to the build <span class="token punctuation">(</span>format:
                                      <span class="token string">&quot;default|&lt;id&gt;[=&lt;socket&gt;|&lt;key&gt;[,&lt;key&gt;]]&quot;</span><span class="token punctuation">)</span>
  -t, <span class="token parameter variable">--tag</span> stringArray               Name and optionally a tag <span class="token punctuation">(</span>format:
                                      <span class="token string">&quot;name:tag&quot;</span><span class="token punctuation">)</span>
      <span class="token parameter variable">--target</span> string                 Set the target build stage to build
      <span class="token parameter variable">--ulimit</span> <span class="token builtin class-name">ulimit</span>                 Ulimit options <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tag-命令" tabindex="-1"><a class="header-anchor" href="#tag-命令" aria-hidden="true">#</a> tag 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag <span class="token parameter variable">--help</span>

Usage:  <span class="token function">docker</span> tag SOURCE_IMAGE<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span> TARGET_IMAGE<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE

Aliases:
  <span class="token function">docker</span> image tag, <span class="token function">docker</span> tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,94),l=[t];function o(c,p){return s(),a("div",null,l)}const d=n(i,[["render",o],["__file","dockerCommand.html.vue"]]);export{d as default};
