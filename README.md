# Uday Zanjurne - Cloud & Linux Infrastructure Portfolio

A premium, interactive, recruiter-grade personal portfolio website for **Uday Zanjurne**, positioned as a **Linux Administrator | AWS Cloud Engineer | Cloud Support Engineer**.

Strictly derived from Uday Zanjurne's verified resume without synthetic metrics, unverified certifications, or exaggerated production claims.

---

## 🚀 Live Demo & Preview

- **Local Preview URL**: `http://localhost:4173/`
- **Development Server**: `npm run dev`
- **Production Build**: `npm run build`

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8 + PostCSS + Tailwind CSS
- **Design System**: Cloud Infrastructure Dark Theme (`#070A12` base, `#FF9900` AWS accent, `#00B4D8` / `#38BDF8` cyan highlights, fine grid pattern)
- **Icons**: Lucide React + custom GitHub vector
- **Typography**: Inter & JetBrains Mono (via Google Fonts)

---

## 🌟 Key Sections & Signature Features

1. **Global Sticky Navigation**:
   - Dynamic glassmorphic navbar with active section observer
   - Quick GitHub link and ATS Resume modal trigger
   - Responsive mobile navigation drawer

2. **Hero Section & Cloud Visualizer**:
   - Dynamic role switcher: *Linux Administrator | AWS Cloud Engineer | Cloud Support Engineer*
   - Status badge: *"Open to Entry-Level Cloud & Infrastructure Roles"*
   - Interactive Cloud Infrastructure Topology with hoverable node inspection (Client → IGW → ALB → EC2 → RDS/Aurora)

3. **Professional Summary (About)**:
   - Educational grounding: *Bachelor of Vocational Software Development* (YCIS, Satara)
   - 3 Core Competency Cards: *Linux Administration*, *AWS Cloud Fundamentals*, *Networking & Automation*
   - Academic lab verification checklist

4. **Technical Skills (Categorized & Filterable)**:
   - 7 distinct categories strictly matching the resume:
     1. Linux Administration (Ubuntu, CLI, systemd, journalctl, SSH, chmod, chown, cron, etc.)
     2. AWS Cloud (EC2, VPC, IAM, S3, EBS, RDS, Route 53, Amplify, EKS, CloudWatch, ALB, ASG, Lambda, CloudFront)
     3. Networking (OSI, TCP/IP, CIDR, Subnetting, DNS, DHCP, HTTP/S, SSH, Ports, Routing, NAT, Security Groups)
     4. Scripting (Python, Bash, Shell commands, Automation)
     5. Databases (MySQL, DynamoDB, DBMS fundamentals)
     6. Developer & SysAdmin Tools (Git, GitHub, VS Code, AWS Console, VirtualBox)
     7. Web Technologies (HTML, CSS)
   - Live search filter and interactive hover descriptions (no fake percentages)

5. **Hands-On Cloud Projects**:
   - **Project 01**: AWS EC2 Web Application (Ubuntu, Nginx, systemd, Security Groups, SSH, HTML/CSS/JS health check)
   - **Project 02**: Highly Available VPC on AWS (2 Availability Zones, Public/Private subnets, ALB, ASG, NAT Gateways, S3 VPC Gateway Endpoint)
   - **Project 03**: AWS 3-Tier Web Application (Web Tier, App Tier, Aurora DB Tier, chained Security Groups)
   - Detailed interactive **Architecture Specification Modal** for each project

6. **Cloud Architecture Lab (Signature Feature)**:
   - Interactive AWS multi-tier diagram
   - 12 components (VPC, AZs, Public Subnets, Private Subnets, IGW, NAT GW, ALB, EC2, ASG, S3, Aurora, Security Groups)
   - Component Inspector answering: *What it does*, *Why it is used*, and *Where it fits*
   - Interactive packet flow tracer (`Simulate Packet Trace`)

7. **Linux Administration Lab**:
   - Interactive Ubuntu bash terminal simulation (`uday@ip-10-0-1-50`)
   - Pre-loaded commands: `whoami`, `pwd`, `ls -la`, `systemctl status nginx`, `journalctl`, `df -h`, `free -h`, `ps aux`, `ssh`, `chmod`, `chown`
   - Real-world sysadmin scenarios & formatted output
   - Safe interactive input prompt (`run`, `clear`, `help`)

8. **Networking Fundamentals**:
   - Visual request lifecycle: *Client → DNS → IP Address → Router → Subnet → Security Group → Server*
   - Interactive protocol cards for interviews (TCP/IP, CIDR, Ports, DHCP, HTTP/S, SSH, NAT, Security Groups)

9. **Education, Certifications & Strengths**:
   - Academic timeline:
     - B.Voc Software Development: Third Year 8.67 CGPA, Second Year 8.74 CGPA, First Year 8.64 CGPA
     - HSC Science: 58.80%
     - SSC: 81.00%
   - Formal Training: AWS Cloud Practitioner Essentials (AWS Skill Builder) & Diploma in Cloud Computing (YCIS Satara)
   - Professional Strengths: Linux Troubleshooting, Cloud Fundamentals, Networking, Scripting, Problem Solving, Teamwork

10. **Contact & Resume Modal**:
    - Direct verified channels: Email (`udayzanjurne04@gmail.com`), Phone (`+91 9356991399`), Location (`Satara, Maharashtra, India`), GitHub (`https://github.com/udayzanjurne`)
    - One-click copy for email and phone
    - Frontend message composer with automatic mailto fallback
    - Printable, ATS-ready resume viewer with Print / Save PDF and Copy Plaintext buttons

---

## 💻 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript compilation & build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

© 2026 Uday Zanjurne. Built with curiosity, Linux & AWS.
