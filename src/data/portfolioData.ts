export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  architectureFlow: string[];
  techStack: string[];
  keyImplementations: string[];
  architectureDetails: {
    title: string;
    description: string;
    components: { name: string; role: string; type: 'network' | 'compute' | 'storage' | 'security' | 'database' }[];
    securityHighlights: string[];
  };
  githubUrl?: string;
  learningOutcomes: string[];
  isProduction: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    tag: string;
    description: string;
  }[];
}

export interface LinuxCommand {
  command: string;
  args?: string;
  category: 'system' | 'services' | 'storage' | 'security' | 'network';
  purpose: string;
  exampleUsage: string;
  simulatedOutput: string;
  sysadminScenario: string;
}

export interface ArchitectureComponent {
  id: string;
  name: string;
  awsService: string;
  category: 'Network' | 'Compute' | 'Database' | 'Storage' | 'Security';
  whatItDoes: string;
  whyUsed: string;
  whereItFits: string;
  icon: string;
}

export interface NetworkingConcept {
  id: string;
  title: string;
  tag: string;
  port?: string;
  protocol?: string;
  summary: string;
  cloudContext: string;
  keyDetails: string[];
}

export const PERSONAL_INFO = {
  name: "UDAY ZANJURNE",
  title: "Linux Administrator | AWS Cloud Engineer | Cloud Support Engineer",
  roles: [
    "Linux Administrator",
    "AWS Cloud Engineer",
    "Cloud Support Engineer"
  ],
  location: "Satara, Maharashtra, India",
  email: "udayzanjurne04@gmail.com",
  phone: "+91 9356991399",
  github: "https://github.com/udayzanjurne",
  availabilityStatus: "Open to Entry-Level Cloud & Infrastructure Roles",
  positioning: "Entry-level cloud and infrastructure candidate with hands-on academic/lab experience in Linux administration, AWS cloud, web servers (Nginx, Apache), deployment platforms (Vercel, Hostinger), networking, Python, Bash scripting, troubleshooting, deployment, and cloud architecture.",
  shortBio: "Motivated and detail-oriented fresher with a strong foundation in Linux administration, computer networking, AWS cloud fundamentals, web servers (Nginx, Apache), hosting platforms (Vercel, Hostinger), Python, and Bash scripting.",
  tagline: "Building practical cloud infrastructure, Linux environments, secure networks, and reliable AWS deployments."
};

export const ABOUT_CARDS = [
  {
    title: "Linux & Web Servers",
    subtitle: "OS Core & Web Services",
    icon: "Terminal",
    description: "Hands-on experience configuring Ubuntu environments, managing users, permissions, process monitoring, systemd unit files, journalctl troubleshooting, and running Nginx & Apache web servers.",
    tags: ["Ubuntu", "Nginx", "Apache", "systemd", "journalctl", "SSH", "chmod/chown", "cron"]
  },
  {
    title: "AWS Cloud Fundamentals",
    subtitle: "Cloud Infrastructure",
    icon: "Cloud",
    description: "Architectural and lab deployment expertise in Amazon VPC, EC2 instances, S3 storage, IAM security policies, RDS, Application Load Balancers, and DNS routing.",
    tags: ["VPC", "EC2", "S3", "IAM", "RDS", "ALB", "Route 53", "EKS"]
  },
  {
    title: "Networking & Deployment",
    subtitle: "Connectivity & Platforms",
    icon: "Network",
    description: "Solid grasp of CIDR, subnetting, TCP/IP, DNS, Security Groups, alongside practical hosting on Vercel and Hostinger with Bash & Python automation.",
    tags: ["TCP/IP", "DNS", "Subnetting", "Vercel", "Hostinger", "Security Groups", "Bash", "Python"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "linux",
    name: "Linux Administration",
    description: "System administration, process management, security controls, and CLI operational workflows.",
    iconName: "Terminal",
    skills: [
      { name: "Ubuntu Linux", tag: "OS", description: "Primary operating system distribution for server instances and lab testing." },
      { name: "CLI (Command Line)", tag: "Shell", description: "Proficient navigation, command chaining, piping, redirection, and text processing." },
      { name: "Filesystem Hierarchy", tag: "FHS", description: "Understanding of /etc, /var/log, /proc, /dev, /home, and standard Linux directory structures." },
      { name: "Users & Groups", tag: "Access", description: "Useradd, usermod, group management, sudoers privileges, and /etc/passwd auditing." },
      { name: "Permissions & Ownership", tag: "Security", description: "Octal and symbolic chmod permissions, chown, chgrp, and umask configurations." },
      { name: "Processes", tag: "Monitoring", description: "Process trees, top, htop, ps aux, kill signals, backgrounding jobs, and nice levels." },
      { name: "systemd", tag: "Services", description: "Service unit management, starting, stopping, enabling, and analyzing boot targets." },
      { name: "journalctl", tag: "Logging", description: "Systemd journal inspection, filtering service logs by unit, boot, and priority." },
      { name: "SSH", tag: "Remote Access", description: "Secure shell key-pair authentication, sshd_config hardening, port security, and SCP." },
      { name: "cron", tag: "Automation", description: "Automating scheduled maintenance, backups, and routine administration via crontab." },
      { name: "Package Management", tag: "APT", description: "Package installation, updates, PPA repositories, dependency resolution with apt." },
      { name: "Log Troubleshooting", tag: "Diagnostics", description: "Analyzing /var/log/syslog, auth.log, and nginx/access.log to diagnose failures." }
    ]
  },
  {
    id: "aws",
    name: "AWS Cloud",
    description: "Core cloud infrastructure, virtualization, networking, identity, and scalable compute services.",
    iconName: "Cloud",
    skills: [
      { name: "Amazon EC2", tag: "Compute", description: "Virtual server provisioning, AMI selection, instance sizing, key-pairs, and user data scripts." },
      { name: "Amazon VPC", tag: "Networking", description: "Custom Virtual Private Clouds, public/private subnets, Route Tables, and Internet Gateways." },
      { name: "AWS IAM", tag: "Security", description: "Identity and Access Management, users, groups, least-privilege roles, and JSON policies." },
      { name: "Amazon S3", tag: "Storage", description: "Object storage buckets, lifecycle policies, access controls, versioning, and static hosting." },
      { name: "Amazon EBS", tag: "Storage", description: "Elastic Block Store volumes, snapshot backups, mounting, and resize management on EC2." },
      { name: "Amazon RDS", tag: "Database", description: "Relational database services, automated backups, multi-AZ deployment concepts." },
      { name: "Amazon Route 53", tag: "DNS", description: "Scalable cloud DNS management, hosted zones, and domain routing policies." },
      { name: "AWS Amplify", tag: "Deployment", description: "Fast frontend deployment workflows and continuous integration from Git repos." },
      { name: "Amazon EKS", tag: "Containers", description: "Managed Kubernetes service fundamentals for container orchestration on AWS." },
      { name: "Amazon CloudWatch", tag: "Monitoring", description: "Metrics collection, alarm thresholds, EC2 health alerts, and CloudWatch logs." },
      { name: "Elastic Load Balancing (ALB)", tag: "Traffic", description: "Distributing incoming application traffic across multiple healthy target instances." },
      { name: "Auto Scaling Groups", tag: "Scaling", description: "Dynamic scaling policies to adjust EC2 capacity based on incoming demand." },
      { name: "AWS Lambda", tag: "Serverless", description: "Serverless event-driven computing fundamentals without server provisioning." },
      { name: "Amazon CloudFront", tag: "CDN", description: "Global Content Delivery Network for low-latency asset caching and edge distribution." }
    ]
  },
  {
    id: "networking",
    name: "Networking",
    description: "Foundational protocols, IP addressing, traffic routing, and network perimeter protection.",
    iconName: "Network",
    skills: [
      { name: "OSI & TCP/IP Models", tag: "Protocols", description: "Clear conceptual understanding of 7-layer OSI and 4-layer TCP/IP protocol suites." },
      { name: "IPv4 / IPv6 Basics", tag: "Addressing", description: "Address structures, public vs. private RFC 1918 spaces, and loopback ranges." },
      { name: "Subnetting & CIDR", tag: "Design", description: "Classless Inter-Domain Routing notation, calculating host bits, subnet masks, and network boundaries." },
      { name: "DNS", tag: "Resolution", description: "Domain name resolution hierarchy, A records, CNAME, MX, NS, and query propagation." },
      { name: "DHCP", tag: "Addressing", description: "Dynamic Host Configuration Protocol discovery, offer, request, and lease allocation." },
      { name: "HTTP / HTTPS", tag: "Web", description: "Web request/response cycles, status codes (2xx, 4xx, 5xx), SSL/TLS encryption." },
      { name: "SSH (Port 22)", tag: "Management", description: "Encrypted remote terminal protocol, asymmetric key handshakes, and tunnel forwarding." },
      { name: "Ports & Protocols", tag: "Network", description: "Standard ports (20/21 FTP, 22 SSH, 53 DNS, 80 HTTP, 443 HTTPS, 3306 MySQL)." },
      { name: "Routing & Route Tables", tag: "Traffic", description: "Next-hop routing decisions, default gateways (0.0.0.0/0), and route priority." },
      { name: "NAT & NAT Gateways", tag: "Outbound", description: "Network Address Translation enabling private subnet resources to reach external internet safely." },
      { name: "VPN Basics", tag: "Tunnels", description: "Virtual Private Network fundamentals for secure site-to-cloud or client-to-cloud encryption." },
      { name: "Security Groups", tag: "Firewall", description: "Stateful virtual firewalls controlling inbound and outbound traffic at instance level." }
    ]
  },
  {
    id: "scripting",
    name: "Scripting & Automation",
    description: "Scripting languages for task automation, system inspection, and administrative routines.",
    iconName: "Code2",
    skills: [
      { name: "Python", tag: "Programming", description: "Foundational scripting for automating administrative tasks, file manipulation, and logic." },
      { name: "Bash", tag: "Shell Scripting", description: "Writing .sh scripts, positional parameters, conditional statements, loops, and exit codes." },
      { name: "Linux Shell Commands", tag: "CLI", description: "Sed, awk, grep, find, cut, sort, uniq, tar, curl, and pipe workflows." },
      { name: "Basic Automation", tag: "DevOps", description: "Creating repeatable setup scripts for packages, user provisioning, and service verification." }
    ]
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational database management systems and cloud database fundamentals.",
    iconName: "Database",
    skills: [
      { name: "MySQL", tag: "RDBMS", description: "Relational database queries, schema concepts, user grants, and database connections." },
      { name: "Amazon DynamoDB", tag: "NoSQL", description: "Managed key-value and document NoSQL database fundamentals on AWS." },
      { name: "DBMS", tag: "Theory", description: "ACID properties, indexing basics, relational integrity, and normalization." },
      { name: "Database Fundamentals", tag: "Storage", description: "Backup procedures, connection pooling concepts, and database access segregation." }
    ]
  },
  {
    id: "tools",
    name: "Developer & SysAdmin Tools",
    description: "Version control, IDEs, hypervisors, and AWS management interfaces.",
    iconName: "Wrench",
    skills: [
      { name: "Git", tag: "VCS", description: "Local version control, staging, committing, branching, merging, and git logs." },
      { name: "GitHub", tag: "Collaboration", description: "Remote repository hosting, pull requests, issue tracking, and code sharing." },
      { name: "VS Code", tag: "Editor", description: "Primary IDE configured with remote SSH development extensions and bash linting." },
      { name: "AWS Management Console", tag: "Console", description: "Hands-on navigation across EC2, VPC, IAM, S3, CloudWatch, and RDS consoles." },
      { name: "VirtualBox", tag: "Hypervisor", description: "Type-2 hypervisor for local Ubuntu Linux VM labs, networking tests, and sandboxes." }
    ]
  },
  {
    id: "web",
    name: "Web Servers & Hosting Platforms",
    description: "Production web server configurations, reverse proxies, static hosting, and cloud deployment platforms.",
    iconName: "Globe",
    skills: [
      { name: "Nginx", tag: "Web Server & Reverse Proxy", description: "Deploying high-performance web servers, reverse proxy pass configuration, SSL/TLS termination, access logging, and worker process tuning." },
      { name: "Apache HTTP Server", tag: "Web Server", description: "Managing Apache virtual hosts, .htaccess directives, mod_rewrite rules, directory security, and multi-site hosting on Linux." },
      { name: "Vercel", tag: "Cloud Deployment", description: "Configuring automated Git-based continuous deployment (CI/CD), serverless edge routing, environment variables, and modern web application hosting." },
      { name: "Hostinger", tag: "Cloud & VPS Hosting", description: "Configuring domain DNS records, VPS server administration, hPanel/cPanel management, SSL installation, and web project hosting." },
      { name: "HTML", tag: "Markup", description: "Semantic document structuring, status response pages, and clean accessible markup." },
      { name: "CSS", tag: "Styling", description: "Responsive layouts, styling web application interfaces, and container alignment." }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ec2-webapp",
    title: "AWS EC2 Web Application",
    subtitle: "Linux & AWS Deployment Project",
    category: "Compute & Web Deployment",
    summary: "Built and deployed a responsive web application on an Ubuntu Linux EC2 instance utilizing Nginx web server, secured through granular AWS Security Groups and verified with interactive health-check endpoints.",
    architectureFlow: [
      "User / Browser",
      "Internet",
      "AWS Security Group (Port 80/443)",
      "Ubuntu EC2 Instance",
      "Nginx Web Server",
      "Web App & Health Check"
    ],
    techStack: [
      "Ubuntu Linux",
      "AWS EC2",
      "Nginx",
      "Security Groups",
      "SSH (Port 22)",
      "HTML/CSS/JS",
      "systemd",
      "Git/GitHub"
    ],
    keyImplementations: [
      "Provisioned an Ubuntu Linux EC2 instance with custom Security Groups opening port 22 for SSH management and ports 80/443 for web traffic.",
      "Configured and managed the Nginx web server service via systemd (systemctl status/enable/restart) to serve the application files.",
      "Created an interactive user interface with responsive elements and a dedicated health-check page to monitor web server responsiveness.",
      "Managed Linux file permissions (chmod, chown) and directory ownership for /var/www/html to ensure secure web root accessibility.",
      "Inspected real-time logs using journalctl -u nginx and /var/log/nginx/access.log to verify client traffic and troubleshoot request lifecycles.",
      "Maintained version-controlled source code and deployment scripts through Git and GitHub."
    ],
    architectureDetails: {
      title: "Single-Instance Cloud Deployment Architecture",
      description: "An entry-level yet industry-standard single-tier deployment illustrating end-to-end web serving, security hardening, and Linux systems administration on cloud infrastructure.",
      components: [
        { name: "Client Browser", role: "Originates HTTP/HTTPS requests to the web server", type: "network" },
        { name: "AWS Security Group", role: "Stateful firewall permitting Port 22 (admin SSH) and Port 80/443 (public web)", type: "security" },
        { name: "Ubuntu EC2 Instance", role: "Cloud compute host running the Linux operating system", type: "compute" },
        { name: "Nginx Web Server", role: "Reverse proxy & HTTP daemon listening on port 80/443", type: "compute" },
        { name: "Application & Health Check", role: "Frontend UI and status check endpoint", type: "compute" }
      ],
      securityHighlights: [
        "Inbound SSH restricted to administrative IP access.",
        "Nginx configured to run under a non-root dedicated user.",
        "Application directory permissions secured against unauthorized modifications."
      ]
    },
    githubUrl: "https://github.com/udayzanjurne",
    learningOutcomes: [
      "Mastery of remote server administration via SSH key-pairs.",
      "Hands-on experience configuring Nginx virtual hosts and systemd service files.",
      "Understanding AWS Security Group stateful filtering and EC2 elastic IP mapping.",
      "Practical troubleshooting using Linux CLI diagnostics and system logs."
    ],
    isProduction: false
  },
  {
    id: "ha-vpc",
    title: "Highly Available VPC on AWS",
    subtitle: "Linux & AWS Deployment Project",
    category: "Cloud Networking & High Availability",
    summary: "Designed a resilient, fault-tolerant AWS Virtual Private Cloud spanning two Availability Zones with separated public and private subnets, redundant NAT Gateways, Application Load Balancers, and secure S3 VPC Gateway Endpoints.",
    architectureFlow: [
      "Internet Traffic",
      "Internet Gateway (IGW)",
      "Public Subnets (AZ-1 & AZ-2)",
      "Application Load Balancer (ALB)",
      "Auto Scaling Group EC2 (Private Subnets)",
      "NAT Gateways / S3 VPC Gateway Endpoint"
    ],
    techStack: [
      "Amazon VPC",
      "Multi-AZ (2 Zones)",
      "Public Subnets",
      "Private Subnets",
      "Application Load Balancer",
      "Auto Scaling Groups",
      "Internet Gateway",
      "NAT Gateways",
      "S3 VPC Endpoint",
      "Security Groups"
    ],
    keyImplementations: [
      "Engineered an Amazon VPC with a custom /16 CIDR block divided into redundant /24 subnets across two distinct Availability Zones.",
      "Segregated network topologies into Public Subnets (accessible via Internet Gateway) and Private Subnets (isolated from direct public inbound traffic).",
      "Deployed an Application Load Balancer across public subnets to distribute client traffic evenly across backend compute nodes.",
      "Configured EC2 instances within an Auto Scaling Group in private subnets, enabling automatic self-healing and load-responsive capacity adjustments.",
      "Configured dual NAT Gateways in public subnets with dedicated Elastic IPs to give private compute instances secure outbound internet access for OS patches.",
      "Integrated an S3 VPC Gateway Endpoint allowing instances to transfer data to Amazon S3 privately through the AWS internal network backbone without traversing the public internet."
    ],
    architectureDetails: {
      title: "Multi-AZ High Availability & Isolation Topology",
      description: "A production-grade cloud network pattern that guarantees no single point of failure and enforces strict defense-in-depth isolation.",
      components: [
        { name: "Internet Gateway (IGW)", role: "Enables bidirectional communication between the VPC and the Internet", type: "network" },
        { name: "Public Subnets (AZ-1 & AZ-2)", role: "Houses public-facing components like the ALB and NAT Gateways", type: "network" },
        { name: "Application Load Balancer", role: "Performs health checks and terminates external client traffic", type: "network" },
        { name: "Private Subnets (AZ-1 & AZ-2)", role: "Houses application instances completely hidden from public IP exposure", type: "network" },
        { name: "Auto Scaling Group", role: "Maintains optimal instance count across both Availability Zones", type: "compute" },
        { name: "NAT Gateways", role: "Performs outbound network address translation for private instances", type: "network" },
        { name: "S3 VPC Gateway Endpoint", role: "Provides private, high-speed routing directly to AWS S3", type: "storage" }
      ],
      securityHighlights: [
        "Backend instances have zero public IPv4 addresses assigned.",
        "Tier-to-tier security group rules allowing only traffic originating from the ALB security group.",
        "Private route tables point 0.0.0.0/0 to the local AZ's NAT Gateway to eliminate cross-AZ latency."
      ]
    },
    githubUrl: "https://github.com/udayzanjurne",
    learningOutcomes: [
      "Calculation and design of non-overlapping CIDR address blocks.",
      "Understanding Multi-AZ high availability strategies and failover mechanics.",
      "Mastery of route tables, associations, and gateway routing targets.",
      "Deep grasp of cloud perimeter defense and network isolation best practices."
    ],
    isProduction: false
  },
  {
    id: "three-tier-app",
    title: "AWS 3-Tier Web Application",
    subtitle: "Linux & AWS Deployment Project",
    category: "Architecture & Multi-Tier Systems",
    summary: "Architected a classic 3-tier enterprise cloud architecture decoupling the presentation tier (Web/Nginx), application tier (EC2 compute), and database tier (Amazon Aurora MySQL) across multiple Availability Zones for maximum security and scalability.",
    architectureFlow: [
      "Client User",
      "Application Load Balancer",
      "Web Tier: EC2 + Nginx (Public Subnet)",
      "App Tier: EC2 Application Nodes (Private Subnet)",
      "Database Tier: Amazon Aurora MySQL (Isolated DB Subnet)"
    ],
    techStack: [
      "Amazon VPC",
      "Multi-AZ Architecture",
      "Application Load Balancer",
      "EC2 Linux Nodes",
      "Nginx Web Server",
      "Amazon Aurora MySQL",
      "Security Groups",
      "NAT Gateway",
      "Git / GitHub"
    ],
    keyImplementations: [
      "Separated architecture into three distinct layers: Web Tier (presentation), App Tier (business logic), and Database Tier (persistent data).",
      "Architected Web Tier with Nginx on EC2 to terminate web sessions and reverse-proxy dynamic requests to internal application servers.",
      "Isolated the Application Tier within private subnets, reachable only via internal API calls from the authorized Web Tier security group.",
      "Configured the Database Tier using Amazon Aurora MySQL distributed across multiple Availability Zones with automated replication and failover.",
      "Enforced chained Security Group rules: ALB SG -> Web Tier SG -> App Tier SG -> Aurora DB SG (allowing port 3306 exclusively from App Tier).",
      "Included NAT Gateways to facilitate secure outbound API updates for private application workers."
    ],
    architectureDetails: {
      title: "Three-Tier Enterprise Cloud Reference Architecture",
      description: "A structured architectural design and lab implementation showcasing industry-standard separation of concerns, secure data residency, and fault-tolerant cloud design.",
      components: [
        { name: "External Load Balancer (ALB)", role: "Front door distributing client web traffic across public web proxies", type: "network" },
        { name: "Web Tier (Nginx on EC2)", role: "Static asset serving, SSL offloading, and reverse-proxy routing", type: "compute" },
        { name: "App Tier (EC2 Private)", role: "Executes backend code and business logic in isolated subnets", type: "compute" },
        { name: "DB Tier (Amazon Aurora)", role: "Managed MySQL-compatible high-performance relational database", type: "database" },
        { name: "Layered Security Groups", role: "Enforces strict port and source security rules between tiers", type: "security" }
      ],
      securityHighlights: [
        "Database is completely unreachable from the public internet and Web Tier directly.",
        "Strict least-privilege security group rules chained by Security Group IDs rather than IP ranges.",
        "Encrypted EBS volumes and encrypted database storage at rest."
      ]
    },
    githubUrl: "https://github.com/udayzanjurne",
    learningOutcomes: [
      "Principles of decoupling services in cloud native environments.",
      "Chaining security groups for zero-trust internal network boundaries.",
      "Relational database isolation and Multi-AZ replication patterns.",
      "Translating enterprise architectural blueprints into functional AWS configurations."
    ],
    isProduction: false
  }
];

export const ARCHITECTURE_LAB_COMPONENTS: ArchitectureComponent[] = [
  {
    id: "vpc",
    name: "Amazon VPC",
    awsService: "Virtual Private Cloud",
    category: "Network",
    whatItDoes: "Provisions a logically isolated virtual network within the AWS Cloud dedicated to your account.",
    whyUsed: "Gives complete control over the virtual networking environment, including IP address range selection, subnets, route tables, and gateways.",
    whereItFits: "The outer boundary of all cloud infrastructure resources. Everything compute, network, and database lives inside this boundary.",
    icon: "Network"
  },
  {
    id: "az",
    name: "Availability Zones (AZs)",
    awsService: "Global Infrastructure",
    category: "Network",
    whatItDoes: "Distinct physical locations within an AWS Region engineered to be isolated from failures in other zones.",
    whyUsed: "Provides fault tolerance and high availability; if one physical data center suffers a power or cooling disruption, redundant instances in other AZs continue operating.",
    whereItFits: "The VPC spans across multiple Availability Zones (e.g. ap-south-1a and ap-south-1b) to eliminate single points of failure.",
    icon: "Layers"
  },
  {
    id: "public-subnet",
    name: "Public Subnet",
    awsService: "VPC Subnetting",
    category: "Network",
    whatItDoes: "A subnet whose route table has a direct route (0.0.0.0/0) pointing to an Internet Gateway.",
    whyUsed: "Houses public-facing resources such as Application Load Balancers, bastion jump hosts, and NAT Gateways that need external internet access.",
    whereItFits: "Directly behind the Internet Gateway, serving as the DMZ (demilitarized zone) for incoming user traffic.",
    icon: "Globe"
  },
  {
    id: "private-subnet",
    name: "Private Subnet",
    awsService: "VPC Subnetting",
    category: "Network",
    whatItDoes: "A subnet with no direct route to the Internet Gateway; instances do not possess public IPv4 addresses.",
    whyUsed: "Shields backend application servers, microservices, and databases from direct public internet exposure and brute-force scans.",
    whereItFits: "Placed internally within the VPC; instances communicate outward only through a NAT Gateway when permitted.",
    icon: "Shield"
  },
  {
    id: "igw",
    name: "Internet Gateway (IGW)",
    awsService: "VPC Gateway",
    category: "Network",
    whatItDoes: "A horizontally scaled, redundant VPC component that enables communication between instances in your VPC and the internet.",
    whyUsed: "Performs IPv4 Network Address Translation (NAT) for instances with public IPs and provides a target in VPC route tables for internet-bound traffic.",
    whereItFits: "Attached directly to the edge of the VPC, bridging the public subnet with the worldwide web.",
    icon: "Wifi"
  },
  {
    id: "nat-gw",
    name: "NAT Gateway",
    awsService: "Managed NAT",
    category: "Network",
    whatItDoes: "Enables instances in private subnets to connect to services outside your VPC (like OS package mirrors) while preventing the internet from initiating inbound connections.",
    whyUsed: "Critical for patching Ubuntu packages (apt update), running security updates, or accessing external APIs safely from private compute nodes.",
    whereItFits: "Deployed in a public subnet with an Elastic IP; private route tables route 0.0.0.0/0 through this NAT Gateway.",
    icon: "ArrowRightLeft"
  },
  {
    id: "alb",
    name: "Application Load Balancer (ALB)",
    awsService: "Elastic Load Balancing",
    category: "Compute",
    whatItDoes: "Distributes incoming HTTP/HTTPS traffic across multiple targets such as EC2 instances in multiple Availability Zones.",
    whyUsed: "Provides single entry point, automatic SSL termination, path-based routing, and continuous health checking to remove unhealthy instances automatically.",
    whereItFits: "Positioned in public subnets receiving internet traffic and forwarding requests to target groups in private subnets.",
    icon: "GitMerge"
  },
  {
    id: "ec2",
    name: "Amazon EC2",
    awsService: "Elastic Compute Cloud",
    category: "Compute",
    whatItDoes: "Provides scalable computing capacity in the AWS cloud, running Linux virtual machines (instances).",
    whyUsed: "Offers customizable compute power, custom OS images (Ubuntu), full root/SSH access, and precise resource rightsizing.",
    whereItFits: "Runs the Nginx web servers and backend application code inside subnets managed under Auto Scaling groups.",
    icon: "Cpu"
  },
  {
    id: "asg",
    name: "Auto Scaling Group",
    awsService: "EC2 Auto Scaling",
    category: "Compute",
    whatItDoes: "Monitors application load and automatically adds or removes EC2 instances according to scaling policies and health check results.",
    whyUsed: "Ensures optimal availability, replaces failed instances automatically, and scales down during low-traffic periods to reduce cloud costs.",
    whereItFits: "Spans private subnets across multiple AZs, managing the fleet of EC2 compute nodes registered with the Load Balancer.",
    icon: "TrendingUp"
  },
  {
    id: "s3",
    name: "Amazon S3",
    awsService: "Simple Storage Service",
    category: "Storage",
    whatItDoes: "Object storage service providing 99.999999999% (11 9's) of data durability with unlimited scaling.",
    whyUsed: "Stores application static assets, media files, backup snapshots, system logs, and disaster recovery archives securely.",
    whereItFits: "Accessed by EC2 instances directly via IAM Roles and accelerated securely via an S3 VPC Gateway Endpoint.",
    icon: "HardDrive"
  },
  {
    id: "aurora",
    name: "Amazon Aurora / RDS",
    awsService: "Managed Relational Database",
    category: "Database",
    whatItDoes: "Fully managed MySQL-compatible relational database engine built for the cloud with distributed, auto-scaling storage.",
    whyUsed: "Automates hardware provisioning, database setup, patching, and backups, replicating 6 copies of data across 3 Availability Zones.",
    whereItFits: "Isolated in dedicated private database subnets accessible only by the application tier on port 3306.",
    icon: "Database"
  },
  {
    id: "security-group",
    name: "Security Groups",
    awsService: "VPC Firewall",
    category: "Security",
    whatItDoes: "Acts as a virtual firewall for your EC2 instances to control inbound and outbound traffic at the network interface layer.",
    whyUsed: "Enforces stateful security rules, restricting access strictly to necessary ports (e.g. 22 SSH, 80 HTTP, 443 HTTPS, 3306 MySQL) from approved CIDRs or security groups.",
    whereItFits: "Attached directly to elastic network interfaces (ENIs) of EC2 instances, load balancers, and RDS databases.",
    icon: "Lock"
  }
];

export const LINUX_COMMANDS: LinuxCommand[] = [
  {
    command: "whoami",
    args: "",
    category: "system",
    purpose: "Displays the current effective user identity.",
    exampleUsage: "$ whoami",
    simulatedOutput: "uday",
    sysadminScenario: "Used when logging onto remote EC2 instances to confirm whether commands will execute as regular user 'uday' or superuser 'root'."
  },
  {
    command: "pwd",
    args: "",
    category: "system",
    purpose: "Print Working Directory: outputs the absolute pathname of current directory.",
    exampleUsage: "$ pwd",
    simulatedOutput: "/home/uday/projects/cloud-app",
    sysadminScenario: "Verifying the working directory before running file operations, editing config files, or deploying code."
  },
  {
    command: "ls",
    args: "-la /var/www/html",
    category: "system",
    purpose: "List directory contents in long format including hidden files, permissions, and ownership.",
    exampleUsage: "$ ls -la /var/www/html",
    simulatedOutput: "total 24\ndrwxr-xr-x 2 www-data www-data 4096 Sep 26 14:20 .\ndrwxr-xr-x 3 root     root     4096 Sep 26 13:45 ..\n-rw-r--r-- 1 www-data www-data 5892 Sep 26 14:18 index.html\n-rw-r--r-- 1 www-data www-data 2104 Sep 26 14:19 style.css\n-rw-r--r-- 1 www-data www-data  420 Sep 26 14:20 health.html",
    sysadminScenario: "Verifying that Nginx document root files have correct ownership (www-data) and read permissions (644) so web traffic does not return 403 Forbidden errors."
  },
  {
    command: "systemctl status",
    args: "nginx",
    category: "services",
    purpose: "Inspect the runtime status, PID, memory usage, and recent log traces of the Nginx systemd service unit.",
    exampleUsage: "$ systemctl status nginx",
    simulatedOutput: "● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)\n     Active: active (running) since Sat 2026-09-26 10:14:22 UTC; 4h 32min ago\n       Docs: man:nginx(8)\n   Main PID: 18420 (nginx)\n      Tasks: 3 (limit: 1143)\n     Memory: 6.8M\n        CPU: 182ms\n     CGroup: /system.slice/nginx.service\n             ├─18420 \"nginx: master process /usr/sbin/nginx -g daemon on; master_process on;\"\n             ├─18421 \"nginx: worker process\"\n             └─18422 \"nginx: worker process\"",
    sysadminScenario: "Core troubleshooting step when verifying web server availability or investigating why an EC2 instance failed its health check."
  },
  {
    command: "systemctl status",
    args: "apache2",
    category: "services",
    purpose: "Inspect the service operational state, active MPM workers, and configuration bindings of Apache HTTP Server.",
    exampleUsage: "$ systemctl status apache2",
    simulatedOutput: "● apache2.service - The Apache HTTP Server\n     Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)\n     Active: active (running) since Sat 2026-09-26 11:05:10 UTC; 3h 41min ago\n       Docs: https://httpd.apache.org/docs/2.4/\n   Main PID: 21450 (apache2)\n      Tasks: 55 (limit: 1143)\n     Memory: 18.2M\n        CPU: 245ms\n     CGroup: /system.slice/apache2.service\n             ├─21450 /usr/sbin/apache2 -k start\n             ├─21453 /usr/sbin/apache2 -k start\n             └─21454 /usr/sbin/apache2 -k start",
    sysadminScenario: "Verifying that Apache daemon is actively running, loaded virtual hosts are responding on ports 80/443, and checking error log pointers."
  },
  {
    command: "journalctl",
    args: "-u nginx --no-pager -n 5",
    category: "services",
    purpose: "Query and filter logs generated by systemd's logging service for a specific unit.",
    exampleUsage: "$ journalctl -u nginx -n 5",
    simulatedOutput: "Sep 26 10:14:21 ip-10-0-1-50 systemd[1]: Starting A high performance web server...\nSep 26 10:14:22 ip-10-0-1-50 nginx[18419]: configuration file /etc/nginx/nginx.conf test is successful\nSep 26 10:14:22 ip-10-0-1-50 systemd[1]: Started A high performance web server.\nSep 26 12:45:01 ip-10-0-1-50 nginx[18421]: 192.168.1.10 - - [26/Sep/2026:12:45:01 +0000] \"GET /health HTTP/1.1\" 200 15 \"-\" \"ELB-HealthChecker/2.0\"\nSep 26 12:45:15 ip-10-0-1-50 nginx[18421]: 192.168.2.22 - - [26/Sep/2026:12:45:15 +0000] \"GET / HTTP/1.1\" 200 5892 \"-\" \"Mozilla/5.0\"",
    sysadminScenario: "Pinpointing configuration errors or examining ALB health check pings on an EC2 instance."
  },
  {
    command: "df",
    args: "-h",
    category: "storage",
    purpose: "Report file system disk space usage in human-readable units (GB, MB).",
    exampleUsage: "$ df -h",
    simulatedOutput: "Filesystem      Size  Used Avail Use% Mounted on\nudev            468M     0  468M   0% /dev\ntmpfs            98M  960K   97M   1% /run\n/dev/xvda1       20G  4.2G   16G  22% /\ntmpfs           486M     0  486M   0% /dev/shm\ntmpfs           5.0M     0  5.0M   0% /run/lock\n/dev/xvdf1       50G   12G   38G  24% /data/logs",
    sysadminScenario: "Monitoring EBS root volume capacity on AWS EC2 to prevent servers from crashing due to disk exhaustion."
  },
  {
    command: "free",
    args: "-h",
    category: "storage",
    purpose: "Display total, used, and available physical memory (RAM) and swap space in human-readable format.",
    exampleUsage: "$ free -h",
    simulatedOutput: "               total        used        free      shared  buff/cache   available\nMem:           969Mi       214Mi       428Mi       2.0Mi       327Mi       618Mi\nSwap:          1.0Gi        12Mi       988Mi",
    sysadminScenario: "Checking memory pressure on t2.micro or t3.micro EC2 free-tier instances to verify whether processes require swap or vertical scaling."
  },
  {
    command: "ps aux",
    args: "| grep nginx",
    category: "system",
    purpose: "List every running process in the system and filter for Nginx master and worker threads.",
    exampleUsage: "$ ps aux | grep nginx",
    simulatedOutput: "root       18420  0.0  0.4  55240  4812 ?        Ss   10:14   0:00 nginx: master process /usr/sbin/nginx\nwww-data   18421  0.0  0.5  55896  5124 ?        S    10:14   0:00 nginx: worker process\nwww-data   18422  0.0  0.5  55896  5124 ?        S    10:14   0:00 nginx: worker process\nuday       19842  0.0  0.1   8900  1024 pts/0    S+   14:46   0:00 grep --color=auto nginx",
    sysadminScenario: "Validating that the master process runs as root to bind low ports (80/443) while workers run securely as unprivileged user www-data."
  },
  {
    command: "ssh",
    args: "-i cloud-key.pem ubuntu@13.233.54.21",
    category: "network",
    purpose: "Establish an encrypted terminal session to a remote cloud host using SSH asymmetric cryptography.",
    exampleUsage: "$ ssh -i ~/.ssh/aws-key.pem ubuntu@13.233.54.21",
    simulatedOutput: "Welcome to Ubuntu 22.04.4 LTS (GNU/Linux 5.15.0-1053-aws x86_64)\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/pro\n\nSystem information as of Sat Sep 26 14:48:02 UTC 2026\n  System load:  0.08               Processes:             108\n  Usage of /:   22.4% of 19.32GB   Users logged in:       1\n  Memory usage: 22%                IPv4 address for eth0: 10.0.1.50\n\nLast login: Fri Sep 25 18:22:10 2026 from 103.21.244.12\nubuntu@ip-10-0-1-50:~$",
    sysadminScenario: "Standard method for logging into EC2 instances with identity private keys while keeping remote servers secured against password-based brute force."
  },
  {
    command: "chmod",
    args: "755 /var/www/html/index.html",
    category: "security",
    purpose: "Modify file access permissions (owner: rwx, group: r-x, others: r-x).",
    exampleUsage: "$ sudo chmod 755 /var/www/html/index.html",
    simulatedOutput: "Permissions updated successfully.\n-rwxr-xr-x 1 www-data www-data 5892 Sep 26 14:18 /var/www/html/index.html",
    sysadminScenario: "Ensuring web server daemon has read and execution permissions on files while restricting unauthorized write access."
  },
  {
    command: "chown",
    args: "-R www-data:www-data /var/www/html",
    category: "security",
    purpose: "Recursively change user and group ownership of the target directory.",
    exampleUsage: "$ sudo chown -R www-data:www-data /var/www/html",
    simulatedOutput: "Ownership changed successfully.\nOwner: www-data, Group: www-data for 5 files.",
    sysadminScenario: "Configuring Ubuntu Nginx web root so the web daemon can serve documents without requiring root privileges."
  }
];

export const NETWORKING_CONCEPTS: NetworkingConcept[] = [
  {
    id: "tcp-ip",
    title: "OSI & TCP/IP Model",
    tag: "Protocol Stack",
    summary: "The foundational framework defining communication from physical transmission up to application protocols.",
    cloudContext: "In AWS, understanding layers helps troubleshoot whether an issue is Layer 4 (Security Group blocking Port 80) or Layer 7 (Nginx 502 Bad Gateway).",
    keyDetails: [
      "Layer 7 (Application): HTTP, HTTPS, DNS, SSH",
      "Layer 4 (Transport): TCP (reliable/handshake), UDP (stateless/low latency)",
      "Layer 3 (Network): IPv4/IPv6 packet routing and CIDR addressing",
      "Layer 2 (Data Link): MAC addressing, VPC virtual interfaces (ENIs)"
    ]
  },
  {
    id: "dns",
    title: "DNS Resolution",
    tag: "Domain Name System",
    port: "53 (UDP/TCP)",
    protocol: "DNS",
    summary: "Translates human-friendly domain names (e.g. udaycloud.in) into machine-routable IP addresses.",
    cloudContext: "Utilized in Amazon Route 53 for hosted zones, alias records mapping to ALBs, and split-view private DNS inside VPCs.",
    keyDetails: [
      "Query hierarchy: Root Servers → TLD Servers (.com/.in) → Authoritative Nameservers",
      "A Record: Maps hostname to IPv4 address",
      "CNAME Record: Maps hostname to canonical alias",
      "TTL (Time-To-Live): Dictates client and recursive resolver caching duration"
    ]
  },
  {
    id: "dhcp",
    title: "DHCP Protocol",
    tag: "IP Allocation",
    port: "67 / 68 (UDP)",
    protocol: "DHCP",
    summary: "Dynamically assigns IP addresses, subnet masks, default gateways, and DNS servers to network devices.",
    cloudContext: "AWS manages internal DHCP option sets across VPCs, automatically leasing private IPs to EC2 instances upon launch.",
    keyDetails: [
      "DORA Flow: Discover → Offer → Request → Acknowledgment",
      "Automates IP configuration across cloud VM fleets",
      "Maintains lease renewal schedules to prevent addressing conflicts"
    ]
  },
  {
    id: "cidr-subnetting",
    title: "CIDR & Subnetting",
    tag: "IP Architecture",
    summary: "Classless Inter-Domain Routing notation defining IP ranges and segmenting large networks into isolated subnets.",
    cloudContext: "Determines VPC address range (e.g. 10.0.0.0/16 = 65,536 IPs) and subnets (/24 = 256 IPs, 5 reserved by AWS for network/router/DNS/future/broadcast).",
    keyDetails: [
      "10.0.0.0/16: 65,536 total addresses (Typical enterprise VPC)",
      "10.0.1.0/24: 256 addresses (Public Subnet AZ-1)",
      "AWS reserves first 4 and last 1 IP in every subnet for infrastructure",
      "Prevents address overlap when peering VPCs or connecting on-premise"
    ]
  },
  {
    id: "ports",
    title: "Standard Cloud Ports",
    tag: "Ports & Services",
    summary: "Logical endpoints for network communication ensuring traffic is delivered to the correct operating system service.",
    cloudContext: "Configured strictly in AWS Security Groups and iptables firewalls to enforce least privilege access.",
    keyDetails: [
      "Port 22: SSH (Secure Shell remote administration)",
      "Port 80: HTTP (Unencrypted web traffic)",
      "Port 443: HTTPS (TLS encrypted web traffic)",
      "Port 3306: MySQL / Amazon Aurora database listening port",
      "Port 53: DNS name queries"
    ]
  },
  {
    id: "http-https",
    title: "HTTP & HTTPS Protocols",
    tag: "Web Communication",
    port: "80 / 443 (TCP)",
    protocol: "HTTP/1.1, HTTP/2",
    summary: "Stateless client-server request/response protocols powering the World Wide Web, secured by TLS certificates.",
    cloudContext: "ALB terminates HTTPS using AWS Certificate Manager (ACM) certificates and forwards traffic to EC2 Nginx backends.",
    keyDetails: [
      "Status codes: 200 OK, 301 Redirect, 403 Forbidden, 404 Not Found, 502 Bad Gateway",
      "TLS Handshake: Negotiates cipher suites and authenticates server identity",
      "Header inspection: Forwarded-For, Host, and User-Agent tracking"
    ]
  },
  {
    id: "ssh-protocol",
    title: "SSH Protocol & Cryptography",
    tag: "Secure Shell",
    port: "22 (TCP)",
    protocol: "SSH-2",
    summary: "Encrypted network protocol for operating network services securely over an unsecured network.",
    cloudContext: "Used with AWS Key Pairs (.pem private key) to manage Ubuntu EC2 instances without exposing passwords.",
    keyDetails: [
      "Asymmetric RSA / Ed25519 public-private key cryptography",
      "Client presents private key proving ownership of public key stored in ~/.ssh/authorized_keys",
      "Protects against eavesdropping, connection hijacking, and spoofing"
    ]
  },
  {
    id: "routing-nat",
    title: "Routing & NAT Gateways",
    tag: "Packet Flow",
    summary: "Directs packets between subnets and translates private RFC 1918 IPs to public Elastic IPs for outbound traffic.",
    cloudContext: "Allows instances in AWS private subnets to run 'apt update' or download dependencies without admitting inbound internet threats.",
    keyDetails: [
      "Route Table: Set of rules (destination CIDR -> target) determining packet direction",
      "Default Route: 0.0.0.0/0 pointing to Internet Gateway (Public) or NAT Gateway (Private)",
      "Stateful NAT: Rewrites source IP on egress, remembers state to return response packets"
    ]
  },
  {
    id: "security-groups",
    title: "Security Groups vs. NACLs",
    tag: "Firewall Defense",
    summary: "Multi-layered network filtering protecting EC2 instances at both the hypervisor and subnet levels.",
    cloudContext: "Security Groups are stateful virtual firewalls at the instance ENI; Network ACLs are stateless subnet-level boundaries.",
    keyDetails: [
      "Stateful: Inbound response traffic is automatically allowed back out regardless of outbound rules",
      "All rules are evaluated before permitting traffic (implicit deny by default)",
      "Can reference other Security Group IDs as sources to enable secure microservice tiers"
    ]
  }
];

export const EDUCATION_LIST = [
  {
    degree: "Bachelor of Vocational Software Development",
    institution: "Yashavantrao Chavan Institute of Science, Satara",
    duration: "Undergraduate Degree",
    status: "Completed",
    academicHighlights: [
      { label: "Third Year", score: "8.67 CGPA" },
      { label: "Second Year", score: "8.74 CGPA" },
      { label: "First Year", score: "8.64 CGPA" }
    ],
    details: "Core technical curriculum emphasizing software development fundamentals, operating systems, database management systems (DBMS), computer networking, web technologies, and hands-on lab projects."
  },
  {
    degree: "HSC – Science",
    institution: "M. K. Mane Junior College, Deur",
    duration: "Higher Secondary Certificate",
    status: "Completed",
    academicHighlights: [
      { label: "Percentage", score: "58.80%" }
    ],
    details: "Science stream curriculum with foundational coursework in Physics, Chemistry, and Mathematics."
  },
  {
    degree: "SSC",
    institution: "Saraswati Vidyalaya, Koregaon",
    duration: "Secondary School Certificate",
    status: "Completed",
    academicHighlights: [
      { label: "Percentage", score: "81.00%" }
    ],
    details: "Secondary education with strong academic performance in Mathematics and Science."
  }
];

export const CERTIFICATIONS_LIST = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    category: "Cloud Certification Training",
    badgeColor: "orange",
    description: "Official foundational training covering AWS cloud architectural concepts, compute, storage, networking, security, database services, and the AWS Shared Responsibility Model.",
    topics: [
      "AWS Global Infrastructure & Regions",
      "Core Services: EC2, S3, VPC, RDS",
      "AWS Cloud Security & IAM Policies",
      "Cloud Economics & Shared Responsibility Model"
    ]
  },
  {
    name: "Diploma in Cloud Computing",
    issuer: "Yashavantrao Chavan Institute of Science, Satara",
    category: "Academic Diploma",
    badgeColor: "cyan",
    description: "Comprehensive institutional cloud computing program providing hands-on lab training in Linux server administration, cloud provisioning, networking, and virtualization.",
    topics: [
      "Linux Server Deployment & Administration",
      "Cloud Virtualization & Hypervisors",
      "Networking Topologies & Routing Protocols",
      "Cloud Storage & Database Deployment"
    ]
  }
];

export const STRENGTHS_LIST = [
  {
    title: "Linux Troubleshooting",
    icon: "Wrench",
    desc: "Methodical diagnosis of file permissions, services, process states, systemd units, and logs."
  },
  {
    title: "Cloud Fundamentals",
    icon: "Cloud",
    desc: "Clear grasp of AWS core primitives: VPC, EC2, IAM, S3, ALB, RDS, and cloud security."
  },
  {
    title: "Networking Fundamentals",
    icon: "Network",
    desc: "Strong foundation in TCP/IP, OSI layers, CIDR subnetting, ports, routing, and NAT."
  },
  {
    title: "Problem Solving",
    icon: "Target",
    desc: "Analytical approach to diagnosing server alerts, configuration mismatches, and network bottlenecks."
  },
  {
    title: "Basic Scripting",
    icon: "Code2",
    desc: "Writing Bash scripts and Python routines for administrative tasks and automated setups."
  },
  {
    title: "Fast Learning",
    icon: "Zap",
    desc: "Rapid assimilation of new cloud services, CLI tooling, and infrastructure methodologies."
  },
  {
    title: "Communication",
    icon: "MessageSquare",
    desc: "Clear technical explanations and incident reporting suitable for cloud support teams."
  },
  {
    title: "Teamwork",
    icon: "Users",
    desc: "Collaborative mindset with respect for version control, documentation, and peer feedback."
  },
  {
    title: "Leadership",
    icon: "Award",
    desc: "Taking initiative during lab projects, organizing deployment steps, and driving completion."
  }
];
