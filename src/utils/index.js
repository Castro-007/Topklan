import { LuBuilding2,  LuCog, LuZap, LuShield, LuCheckCheck, LuTimer, LuUsers, LuLandmark, LuGlobe, LuCalendar,LuAward, LuHeart, LuEye, LuTarget, LuWrench, LuCalculator, LuFileText, LuPhone } from "react-icons/lu";
import Engine1 from '../assets/images/Engine1.jpg';
import Engine2 from '../assets/images/Engine2.jpg';    
import Engine3 from '../assets/images/Engine3.jpg';
import Engine4 from '../assets/images/Engine4.jpg';
import { FaEnvelope } from "react-icons/fa";
import Adidas from '../assets/images/ADIDAS.jpg'    
import Oweh from '../assets/images/OWEH STREET 4.png'
import Oweh1 from '../assets/images/OWEH STREET 1.png'
import Oweh2 from '../assets/images/OWEH STREET 2.png'
import Oweh3 from '../assets/images/OWEH STREET 3.png'
import Oweh5 from '../assets/images/OWEH STREET 5.png'
import J77B from '../assets/images/J77B.png'
import J77B1 from '../assets/images/J77B 1.png'
import J77B2 from '../assets/images/J77B 2.png'
import J77B3 from '../assets/images/J77B 3.png'
import CourtHouse from '../assets/images/ILORIN COURTHOUSE 3.png'
import CourtHous2 from '../assets/images/ILORIN COURTHOUSE 2.png'
import CourtHous4 from '../assets/images/ILORIN COURTHOUSE 4.png'
import Ikoya from '../assets/images/IKOYA 3.png'
import Ikoya1 from '../assets/images/IKOYA 1.png'
import Ikoya2 from '../assets/images/IKOYA 2.png'
import Ikoya4 from '../assets/images/IKOYA 4.png'
import BlackStone from '../assets/images/BLACKSTONE TOWERS 1.png'
import Altona from '../assets/images/THE ALTONA 2.png'
import Altona2 from '../assets/images/THE ALTONA.png'
import Altona3 from '../assets/images/THE ALTONA 3.jpg'
import Lantern from '../assets/images/Lntern House.png'
import Lantern1 from '../assets/images/Lantern-house1.jpg'
import Lantern3 from '../assets/images/Lantern-house3.png'
import Lantern4 from '../assets/images/Lantern-house4.png'
import Lantern5 from '../assets/images/Lantern-house5.jpg'
import Lantern6 from '../assets/images/Lantern-house6.jpg'
import ONL from '../assets/images/ONL.jpg'
import ONL1 from '../assets/images/ONL1.jpg'
import ONL2 from '../assets/images/ONL2.jpg'
import ONL3 from '../assets/images/ONL3.jpg'
import ONL4 from '../assets/images/ONL4.jpg'
import ONL5 from '../assets/images/ONL5.jpg'
import ONL6 from '../assets/images/ONL6.jpg'
import Shore from '../assets/images/THE SHORE JABI.jpg'
import KwaraIRS from '../assets/images/kwara Revenue.jpg'
import KwaraIRS01 from '../assets/images/KwaraIRS.jpg'
import KwaraIRS1 from '../assets/images/KwaraIRS1.jpg'
import KwaraIRS2 from '../assets/images/KwaraIRS2.jpg'
import Close301 from '../assets/images/301 Close.jpg'
import Oasis from '../assets/images/monuel oasis.jpg'
import Straton from '../assets/images/Straton Gate.jpg'
import J78A from '../assets/images/J78A.jpg'
import NBA from '../assets/images/NBA2.jpg'
import Nsdc from '../assets/images/NSDC HQ.jpg'
import ILEOJA from '../assets/images/ILEOJA.jpg'
import PrivateNicon from '../assets/images/Private residence NICON.png'
import AGAJA from '../assets/images/Agaja Beach House 2.jpg'
import IlorinCivic from '../assets/images/Ilorin civic Center.png'
import Lotus from '../assets/images/Lotus.jpg'
import IlorinMus from '../assets/images/ILORIN MUSUEM AND GARDEN.jpg'
import PrivateCairo from '../assets/images/Private residence Cairo.jpg'
import Alliance from '../assets/images/alliance franchise.jpg'
import Sakatinubu from '../assets/images/Baron-Architecture50-Saka-Tinubu_18-1.jpg'
import TollHeights from '../assets/images/toll Height.jpg'
import NiconTown from '../assets/images/nicon tollheights.jpg'
import Agbor from '../assets/images/Villa Agbor.jpg'
import Lemon7 from '../assets/images/Lemon_Beach-House.jpg'
import SkyRemit from '../assets/images/Skymit Showroom.jpg'
import Sanya from '../assets/images/Sanya.jpg'
import Foreshore from '../assets/images/Foreshore estate.jpg'
import CivilService from '../assets/images/civil service Hopsi.jpg'
import J77A from '../assets/images/J77A.jpg'
import AsoVilla from '../assets/images/ASO VILLA 2.jpg'
import Banana from '../assets/images/BANANA J48.png'
import GeorgeStr from '../assets/images/GEORGE STREET RESIDENCE 2.jpg'


export const NavBlink = [
    {
        Id: 1,
        name: 'Home',
        Link: '/',
    },
    {
        Id: 2,
        name: 'About',
        Link: '/About',
    },
    {
        Id: 3,
        name: 'Services',
        Link: '/Services',
    },
    {
        Id: 4,
        name: 'Project',
        Link: '/Projects',
    },
    
]

export const Cards = [
    {
        id: 1,
        headtext: 'Structural Engineering',
        text: 'Design and analysis of buildings, bridges, and infrastructure with cutting-edge technology.',
        socialIcon: LuBuilding2 ,
        iconStyles: '  group-hover:bg-blue-600 bg-slate-200 text-4xl duration-200 transition delay-100 group-hover:text-white p-1 rounded ',
        styless: 'bg-[#f8f9fa] text-blue-600 border-l-2 group border-l-blue-600',
        pstyles:'text-base text-gray-700 font-Raleway',
    },
    {
        id: 2,
        headtext: 'Electrical Engineering',
        text: 'Power systems, automation, control systems, and renewable energy solutions.',
        socialIcon: LuZap ,
        iconStyles: '  group-hover:bg-green-600 bg-slate-200 text-4xl duration-200 transition delay-100 group-hover:text-white p-1 rounded ',
        styless: 'bg-[#f8f9fa]  text-[#16A34A] group border-l-[#16A34A] border-l-2',
        pstyles:'text-base text-gray-700 font-Raleway',
    },
    {
        id: 3,
        headtext: 'Mechanical Engineering',
        text: 'HVAC systems, industrial machinery design, and mechanical system optimization.',
        socialIcon: LuCog ,
        iconStyles: '  group-hover:bg-red-600 bg-slate-200 text-4xl duration-200 transition delay-100 group-hover:text-white p-1 rounded ',
        styless: 'bg-[#f8f9fa]  text-red-600 group border-l-red-600 border-l-2',
        pstyles:'text-base text-gray-700 font-Raleway',
    },
    {
        id: 4,
        headtext: 'Safety Engineering',
        text: 'Risk assessment, safety protocols, and compliance management for all projects.',
        socialIcon: LuShield ,
        iconStyles: '  group-hover:bg-purple-600 bg-slate-200 text-4xl duration-200 transition delay-100 group-hover:text-white p-1 rounded ',
        styless: 'bg-[#f8f9fa]  text-purple-600 group border-l-purple-600 border-l-2',
        pstyles:'text-base text-gray-700 font-Raleway',
    },
]

export const ChooseUs = [
    {
        id: 1,
        headTxt: 'Proven Track Record',
        pTxt: '500+ successful projects across various industries',
        socialIcon: LuCheckCheck,
    },

    {
        id: 2,
        headTxt: 'Expert Team',
        pTxt: '50+ certified engineers and technical specialists',
        socialIcon: LuCheckCheck,
    },

    {
        id: 3,
        headTxt: 'Innovative Focus',
        pTxt: 'Cutting-edge technology and sustainable solutions',
        socialIcon: LuCheckCheck,
    },

    {
        id: 4,
        headTxt: 'Quality Assurance',
        pTxt: 'ISO certified processes and rigorous quality control',
        socialIcon: LuCheckCheck,
    }
]

export const AwardSec = [
    {
        id: 1,
        head: '24/7 Support',
        low: 'Always available',
        socialIcon: LuTimer,
        styless:'bg-gray-800 text-white'
    },

    {
        id: 2,
        head: 'Expert Team',
        low: 'Certified professionals',
        socialIcon: LuUsers,
        styless:'bg-green-400 text-green-900'
    },

    {
        id: 3,
        head: 'Global reach',
        low: 'Worldwide projects',
        socialIcon: LuGlobe,
        styless:'bg-red-200 text-red-600'
    },

    {
        id: 4,
        head: 'Quality Assurance',
        low: 'ISO certified processes',
        socialIcon: LuShield,
        styless:'bg-blue-200 text-blue-600'
    }
]

export const FooterLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'About',
        link: '/About',
    },
    {
        id: 3,
        name: 'Services',
        link: '/Services',
    },
    {
        id: 4,
        name: 'Projects',
        link: '/Projects',
    },
    {
        id: 5,
        name: 'Contact',
        link: '/Contact',
    }
]

export const AboutSec =[
    {
        id: 1,
        socialIcon: LuCalendar,
        headTxt: '15+',
        pTxt: 'Years of Experience',
    },
    {
        id: 2,
        socialIcon: LuUsers,
        headTxt: '50+',
        pTxt: 'Expert Engineers',
    },
    {
        id: 3,
        socialIcon: LuAward,
        headTxt: '500+',
        pTxt: 'Projects Completed',
    },
    {
        id: 4,
        socialIcon: LuGlobe,
        headTxt: '25+',
        pTxt: 'Countries Served',
    }
]

export const CoreSec = [
    {
        id: 1,
        socialIcon: LuTarget,
        headTxt: 'Excellence',
        pTxt: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
        id: 2,
        socialIcon: LuEye,
        headTxt: 'Innovation',
        pTxt: 'Embracing cutting-edge technology and innovative approaches to solve complex challenges.',
    },
    {
        id: 3,
        socialIcon: LuHeart,
        headTxt: 'Integrity',
        pTxt: 'Building trust through transparent communication and ethical business practices.',
    },
    {
        id: 4,
        socialIcon: LuUsers,
        headTxt: 'Collaboration',
        pTxt: 'Working closely with clients and partners to achieve shared goals and success.',
    },
]

export const TeamMembers = [
    {
        id: 1,
        Name: 'Engr. Sheriff Kilanse',
        Position: 'Chief Executive Officer',
        Sector: 'Structural Engineering',
        Image: Engine1,
        Exp: '20+ years'
    },
    {
        id: 2,
        Name: 'Engr. Micheal Onasanya',
        Position: 'Chief Technology Officer',
        Sector: 'Electrical Sysytems',
        Image: Engine3,
        Exp: '18+ years'
    },
    {
        id: 3,
        Name: 'Engr. Sarah Johnson',
        Position: 'Project Director',
        Sector: 'Mechanical Engineering',
        Image: Engine2,
        Exp: '15+ years'
    },
    {
        id: 4,
        Name: 'Engr. Emily Rodriguez',
        Position: 'Safety Director',
        Sector: 'Safety Engineering',
        Image: Engine4,
        Exp: '12+ years'
    },
]

export const ServiceCont = [
    {
        id: 1,
        socialIcon: LuBuilding2,
        Name: 'Structural Engineering',
        pTxt: 'Complete structural design and analysis services for buildings, bridges, and infrastructure.',
        listTxt:[
            {
                id:1,
                liTxt: 'Seismic Analysis',
            },
            {
                id:2,
                liTxt: 'Load Calculations',
            },
            {
                id:3,
                liTxt: 'Foundation Design',
            },
            {
                id:4,
                liTxt: 'Steel & Concrete Design',
            },
        ],
        containerStyles:'border-l-blue-400 border-l-2',
        bgColor: 'bg-blue-600',
        color: 'text-blue-600',
        iconStyles: 'hover:text-white hover:bg-blue-600 text-blue-600',
        
        ServiceTxt: 'Expert structural engineering services for buildings, bridges, and infrastructure projects. We ensure safety, efficiency, and compliance with all building codes and regulations.',
        onlyColor: 'blue-600',
        offerTxt: 'What We Offer',
        offerList: [
            {
                id: 1,
                liTxt: 'Structural Design',
            },
            {
                id: 2,
                liTxt: 'Load Analysis',
            },
            {
                id: 3,
                liTxt: 'Seismic Design',
            },
            {
                id: 4,
                liTxt: 'Foundation Engineering',
            },
            {
                id: 5,
                liTxt: 'Calculation Analysis',
            },
            {
                id: 6,
                liTxt: 'Bridge Engineering',
            },
            {
                id: 7,
                liTxt: 'Retrofit & Rehabilitation',
            },
            {
                id: 8,
                liTxt: 'Building Code Compliance',
            },
        ],
        ChooseTxt: 'Why Choose Our Structural Engineering?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'Advanced Analysis Tools',
                listPTxt: 'We use state-of-the-art software for structural analysis including ETABS, SAP2000, and ANSYS for complex modeling and simulation.',
            },
            {
                id: 2,
                listHtxt: 'Code Compliance',
                listPTxt: 'Expert knowledge of international building codes including IBC, AISC, ACI, and local regulations ensuring full compliance.',
            },
            {
                id: 3,
                listHtxt: 'Seismic Expertise',
                listPTxt: 'Specialized in seismic design and analysis for earthquake-resistant structures in high-risk zones.',
            },
        ],
    },
    {
        id: 2,
        socialIcon: LuCog,
        Name: 'Mechanical Engineering',
        pTxt: 'HVAC systems, industrial machinery design, and mechanical system optimization.',
        listTxt:[
            {
                id:1,
                liTxt: 'HVAC Design',
            },
            {
                id:2,
                liTxt: 'Piping Systems',
            },
            {
                id:3,
                liTxt: 'Equipment Selection',
            },
            {
                id:4,
                liTxt: 'Energy Efficiency',
            },
        ],
        containerStyles:'border-l-red-400 border-l-2',
        bgColor: 'bg-red-600',
        color: 'text-red-600',
        iconStyles: 'hover:text-white hover:bg-red-400 text-red-600',
        
        ServiceTxt: 'Expert structural engineering services for buildings, bridges, and infrastructure projects. We ensure safety, efficiency, and compliance with all building codes and regulations.',
        onlyColor: 'red-600',
                offerTxt: 'Our Services',
        offerList: [
            {
                id: 1,
                liTxt: 'HVAC System Design & Installation',
            },
            {
                id: 2,
                liTxt: 'Industrial Machinery Design',
            },
            {
                id: 3,
                liTxt: 'Piping System Engineering',
            },
            {
                id: 4,
                liTxt: 'Energy Efficiency Optimization',
            },
            {
                id: 5,
                liTxt: 'Thermal Analysis & Modeling',
            },
            {
                id: 6,
                liTxt: 'Process Engineering',
            },
            {
                id: 7,
                liTxt: 'Ventilation System Design',
            },
            {
                id: 8,
                liTxt: 'Mechanical System Commissioning',
            },
        ],
        ChooseTxt: 'Why Choose Our Expertise?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'Advanced Design Tools',
                listPTxt: 'We utilize AutoCAD MEP, Revit MEP, and specialized HVAC software for precise mechanical system design.',
            },
            {
                id: 2,
                listHtxt: 'Energy Efficiency',
                listPTxt: 'Focus on sustainable and energy-efficient solutions that reduce operational costs and environmental impact.',
            },
            {
                id: 3,
                listHtxt: 'Code Compliance',
                listPTxt: 'Expert knowledge of ASHRAE standards, local mechanical codes, and industry best practices.',
            },
        ],
    },
    {
        id: 3,
        socialIcon: LuZap,
        Name: 'Electrical Engineering',
        pTxt: 'Power systems, automation, control systems, and renewable energy solutions.',
        listTxt:[
            {
                id:1,
                liTxt: 'Power Distribution',
            },
            {
                id:2,
                liTxt: 'Automation',
            },
            {
                id:3,
                liTxt: 'Control Systems',
            },
            {
                id:4,
                liTxt: 'Renewable Energy',
            },
        ],
        containerStyles:'border-l-green-600 border-l-2',
        bgColor: 'bg-green-600',
        color: 'text-green-600',
        iconStyles: 'hover:text-white hover:bg-green-600 text-green-300',
         
        ServiceTxt: 'Comprehensive electrical engineering solutions for power systems, automation, control systems, and renewable energy integration.',
        onlyColor: 'green-600',
        offerTxt: 'Our Services',
        offerList: [
            {
                id: 1,
                liTxt: 'Power Distribution System Design',
            },
            {
                id: 2,
                liTxt: 'Electrical Panel & Switchgear Design',
            },
            {
                id: 3,
                liTxt: 'Control Systems Integration',
            },
            {
                id: 4,
                liTxt: 'Lighting Design & Simulation',
            },
            {
                id: 5,
                liTxt: 'Renewable Energy Systems (Solar, Wind, Backup)',
            },
            {
                id: 6,
                liTxt: 'Electrical Load Analysis',
            },
            {
                id: 7,
                liTxt: 'Fire Alarm & Security Systems Design',
            },
            {
                id: 8,
                liTxt: 'Electrical System Commissioning',
            },
        ],
        ChooseTxt: 'Why Choose Our Expertise?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'Advanced Design Tools',
                listPTxt: 'We utilize AutoCAD Electrical, ETAP, and Dialux for power distribution, lighting analysis, and system simulations.',
            },
            {
                id: 2,
                listHtxt: 'Energy Efficiency',
                listPTxt: 'Focus on reducing power consumption and integrating sustainable, renewable energy sources.',
            },
            {
                id: 3,
                listHtxt: 'Code Compliance',
                listPTxt: 'Expertise in NEC, IEC, and local electrical standards for safe and reliable system designs.',
            },
        ],
    },
    {
        id: 4,
        socialIcon: LuShield,
        Name: 'Safety Engineering',
        pTxt: 'Risk assessment, safety protocols, and compliance management for all projects.',
        listTxt:[
            {
                id:1,
                liTxt: 'Risk Assessment',
            },
            {
                id:2,
                liTxt: 'Safety Protocols',
            },
            {
                id:3,
                liTxt: 'Code Compliance',
            },
            {
                id:4,
                liTxt: 'Emergency Planning',
            },
        ],
        containerStyles:'border-l-purple-600 border-l-2',
        bgColor: 'bg-purple-600',
        color: 'text-purple-600',
        iconStyles: 'hover:text-white hover:bg-purple-600 text-purple-600',
         
        ServiceTxt: 'Complete risk management, safety protocol development, and regulatory compliance services for engineering projects.',
        onlyColor: 'purple-600',
                        offerTxt: 'Our Services',
        offerList: [
            {
                id: 1,
                liTxt: 'Risk Assessment & Mitigation',
            },
            {
                id: 2,
                liTxt: 'Fire Protection System Design',
            },
            {
                id: 3,
                liTxt: 'OSHA & HSE Compliance Audits',
            },
            {
                id: 4,
                liTxt: 'Safety Protocol Development',
            },
            {
                id: 5,
                liTxt: 'Construction Site Safety Planning',
            },
            {
                id: 6,
                liTxt: 'Incident Investigation & Reporting',
            },
            {
                id: 7,
                liTxt: 'Code Compliance Review',
            },
            {
                id: 8,
                liTxt: 'Incident Investigation & Reporting',
            },
        ],
        ChooseTxt: 'Why Choose Our Expertise?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'Proven Safety Protocols',
                listPTxt: 'Utilizing industry-standard HSE frameworks and OSHA guidelines to protect personnel and assets.',
            },
            {
                id: 2,
                listHtxt: 'Compliance Management',
                listPTxt: 'Focus on sustainable and energy-efficient solutions that reduce operational costs and environmental impact.',
            },
            {
                id: 3,
                listHtxt: 'Emergency Planning',
                listPTxt: 'Customized emergency action and evacuation plans for high-risk facilities.',
            },
        ],
    },
    {
        id: 5,
        socialIcon: LuWrench,
        Name: 'Project Management',
        pTxt: 'End-to-end project management ensuring timely delivery and quality control.',
        listTxt:[
            {
                id:1,
                liTxt: 'Timeline Management',
            },
            {
                id:2,
                liTxt: 'Quality Control',
            },
            {
                id:3,
                liTxt: 'Budget Planning',
            },
            {
                id:4,
                liTxt: 'Team Coordination',
            },
        ],
        containerStyles:'border-l-purple-600 border-l-2',
        bgColor: 'bg-purple-600',
        color: 'text-purple-600',
        iconStyles: 'hover:text-white hover:bg-purple-600 text-purple-600',
         
        ServiceTxt: 'End-to-end engineering project management for timely, budget-compliant, and quality-controlled project delivery.',
        onlyColor: 'purple-600',
                        offerTxt: 'Our Services',
        offerList: [
            {
                id: 1,
                liTxt: 'Project Planning & Scheduling',
            },
            {
                id: 2,
                liTxt: 'Resource & Team Coordination',
            },
            {
                id: 3,
                liTxt: 'Budget Planning & Control',
            },
            {
                id: 4,
                liTxt: 'Quality Assurance & Control',
            },
            {
                id: 5,
                liTxt: 'Risk Management',
            },
            {
                id: 6,
                liTxt: 'Construction Management',
            },
            {
                id: 7,
                liTxt: 'Progress Reporting',
            },
            {
                id: 8,
                liTxt: 'Vendor & Contractor Management',
            },
        ],
        ChooseTxt: 'Why Choose Our Expertise?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'Agile & Waterfall Project Delivery',
                listPTxt: 'Using modern management software like MS Project, Primavera P6, and Trello for structured execution.',
            },
            {
                id: 2,
                listHtxt: 'Quality Control',
                listPTxt: 'Rigorous QA/QC processes to maintain industry and client standards.',
            },
            {
                id: 3,
                listHtxt: 'Budget Efficiency',
                listPTxt: 'Cost management strategies for optimal resource allocation.',
            },
        ],
    },
    {
        id: 6,
        socialIcon: LuCalculator,
        Name: 'Engineering Analysis',
        pTxt: 'Advanced computational analysis and simulation services for complex projects..',
        listTxt:[
            {
                id:1,
                liTxt: 'FEA Analysis',
            },
            {
                id:2,
                liTxt: 'CFD Simulation',
            },
            {
                id:3,
                liTxt: 'Thermal Analysis',
            },
            {
                id:4,
                liTxt: 'Vibration Analysis',
            },
        ],
        containerStyles:'border-l-blue-600 border-l-2',
        bgColor: 'bg-blue-600',
        color: 'text-blue-600',
        iconStyles: 'hover:text-white hover:bg-blue-600 text-blue-600',
        
        ServiceTxt: 'Advanced computational analysis and simulation services for complex engineering challenges.',
        onlyColor: 'blue-600',
                        offerTxt: 'Our Services',
        offerList: [
            {
                id: 1,
                liTxt: 'Finite Element Analysis (FEA)',
            },
            {
                id: 2,
                liTxt: 'Computational Fluid Dynamics (CFD)',
            },
            {
                id: 3,
                liTxt: 'Thermal Analysis & Heat Transfer',
            },
            {
                id: 4,
                liTxt: 'Vibration & Modal Analysis',
            },
            {
                id: 5,
                liTxt: 'Structural Stability Assessment',
            },
            {
                id: 6,
                liTxt: 'Energy Simulation',
            },
            {
                id: 7,
                liTxt: 'Aerodynamics Simulation',
            },
            {
                id: 8,
                liTxt: 'Equipment Load Testing',
            },
        ],
        ChooseTxt: 'Our Expertise?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'High-End Simulation Tools',
                listPTxt: 'Expertise in ANSYS, SolidWorks Simulation, SAP2000, and Autodesk CFD.',
            },
            {
                id: 2,
                listHtxt: 'Detailed Reporting',
                listPTxt: 'Comprehensive technical analysis reports for design validation.',
            },
            {
                id: 3,
                listHtxt: 'Code Compliance',
                listPTxt: 'Expert knowledge of ASHRAE standards, local mechanical codes, and industry best practices.',
            },
        ],
    },
    {
        id: 7,
        socialIcon: LuFileText,
        Name: 'Documentation and Permits',
        pTxt: 'Complete documentation services and permit assistance for engineering projects.',
        listTxt:[
            {
                id:1,
                liTxt: 'Technical Documentation',
            },
            {
                id:2,
                liTxt: 'Permit Applications',
            },
            {
                id:3,
                liTxt: 'Code Review',
            },
            {
                id:4,
                liTxt: 'Compliance Reports',
            },
        ],
        containerStyles:'border-l-red-600 border-l-2',
        bgColor: 'bg-red-600',
        color: 'text-red-600',
        iconStyles: 'hover:text-white hover:bg-red-600 text-red-600',
        
        ServiceTxt: 'Full documentation services and regulatory permit assistance for engineering and construction projects.',
        onlyColor: 'red-600',
                        offerTxt: 'Our Services',
        offerList: [
            {
                id: 1,
                liTxt: 'Technical Document Preparation',
            },
            {
                id: 2,
                liTxt: 'Permit Application Support',
            },
            {
                id: 3,
                liTxt: 'Construction Drawing Packages',
            },
            {
                id: 4,
                liTxt: 'Compliance Documentation',
            },
            {
                id: 5,
                liTxt: 'Code & Regulation Review',
            },
            {
                id: 6,
                liTxt: 'As-Built Documentation',
            },
            {
                id: 7,
                liTxt: 'Inspection Reports',
            },
            {
                id: 8,
                liTxt: 'Safety Compliance Documentation',
            },
            {
                id: 9,
                liTxt: 'Environmental Impact Assessments',
            },
        ],
        ChooseTxt: 'Our Expertise?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'Regulatory Experience',
                listPTxt: 'Familiar with local, national, and international permitting standards and processes.',
            },
            {
                id: 2,
                listHtxt: 'Detailed Technical Writing',
                listPTxt: 'Accurate, clear, and professional documentation tailored to regulatory standards.',
            },
            {
                id: 3,
                listHtxt: 'Submission & Follow-Up',
                listPTxt: 'Managing application processes and authority communications.',
            },
        ],
    },
    {
        id: 8,
        socialIcon: LuUsers,
        Name: 'Consulting Service',
        pTxt: 'Expert consulting and advisory services for engineering challenges.',
        listTxt:[
            {
                id:1,
                liTxt: 'Technical Consulting',
            },
            {
                id:2,
                liTxt: 'Expert Witness',
            },
            {
                id:3,
                liTxt: 'Code Consulting',
            },
            {
                id:4,
                liTxt: 'Training Programs',
            },
        ],
        containerStyles:'border-l-green-600 border-l-2',
        bgColor: 'bg-green-600',
        color: 'text-green-600',
        iconStyles: 'hover:text-white hover:bg-green-600 text-green-600',
        ServiceTxt: 'Expert advisory and consulting services across engineering disciplines and project phases.',
        onlyColor: 'green-600',
                        offerTxt: 'Our Services',
        offerList: [
            {
                id: 1,
                liTxt: 'Technical Consulting & Feasibility Studies',
            },
            {
                id: 2,
                liTxt: 'Design & Code Compliance Reviews',
            },
            {
                id: 3,
                liTxt: 'Value Engineering & Optimization',
            },
            {
                id: 4,
                liTxt: 'Expert Witness Services',
            },
            {
                id: 5,
                liTxt: 'Project Risk Assessment',
            },
            {
                id: 6,
                liTxt: 'Procurement Advisory',
            },
            {
                id: 7,
                liTxt: 'Site & Safety Audits',
            },
            {
                id: 8,
                liTxt: 'Training & Workshops',
            },
            {
                id: 9,
                liTxt: 'Sustainability Consulting',
            },
            {
                id: 10,
                liTxt: 'Project Cost Estimation',
            },
        ],
        ChooseTxt: 'Why Choose Our Expertise?',
        ChooseList: [
            {
                id: 1,
                listHtxt: 'Advanced Design Tools',
                listPTxt: 'We utilize AutoCAD MEP, Revit MEP, and specialized HVAC software for precise mechanical system design.',
            },
            {
                id: 2,
                listHtxt: 'Energy Efficiency',
                listPTxt: 'Focus on sustainable and energy-efficient solutions that reduce operational costs and environmental impact.',
            },
            {
                id: 3,
                listHtxt: 'Code Compliance',
                listPTxt: 'Expert knowledge of ASHRAE standards, local mechanical codes, and industry best practices.',
            },
        ],
    }
]

export const ServiceProc = [
    {
        id:1,
        number: '01',
        Name: 'Consultation',
        Txt: 'Initial project assessment and requirement gathering'
    },
    {
        id:2,
        number: '02',
        Name: 'Design',
        Txt: 'Detailed engineering design and calculations'
    },
    {
        id:3,
        number: '03',
        Name: 'Review',
        Txt: 'Quality assurance and design validation'
    },
    {
        id:4,
        number: '04',
        Name: 'Delivery',
        Txt: 'Project completion and documentation handover'
    },
]

export const contacGrid = [
    {
        id: 1,
        socialIcon: LuPhone,
        Txt: 'Phone',
        pTxt: '+2349030867276',
        color: 'blue-600'
    },
    
    {
        id: 2,
        socialIcon: FaEnvelope,
        Txt: 'Email',
        pTxt: 'info@topklan.com',
        pTxt2: 'topklanprojects@topklan.com',
        color: 'red-600'
    },
    {
        id: 3,
        socialIcon: LuLandmark,
        Txt: 'Location',
        pTxt: '123 Engineering Plaza',
        pTxt2: 'Tech City, TC 12345',
        color: 'green-600'
    },
    {
        id: 4,
        socialIcon: LuTimer,
        Txt: 'Business Hours',
        pTxt: 'Mon - Fri: 8:00 AM - 6:00 PM',
        pTxt2: 'Sat: 9:00 AM - 2:00 PM',
        color: 'purple-600'
    },
]
 
export const doneProject = [
    {
        id: 1,
        Status:"Completed",
        image: Oweh,
        sideImage:[
            {id:1, img:Oweh1},
            {id:2, img:Oweh2},
            {id:3, img:Oweh3},
            {id:5, img:Oweh5},
        ],
        Title:"Oweh Street",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "Lagos state",
        date: "2022",
        engineers: "28",
        duration: "2 months",
        Client: "PRIVATE",
        Overview: "Topklan Engineering Services was contracted to provide comprehensive mechanical and electrical design solutions for a newly constructed residential development located on Oweh Street, Lagos. ",
        Overview2: "The project aimed to deliver efficient, sustainable, and safety-compliant utility systems tailored to modern living standards while optimizing operational performance and maintenance efficiency.",
        Architect: "IDLEWOODS LIMITED",
        Category:'Mechanical',
        intro:'This project reinforces Topklan Engineering Services reputation as a reliable partner for delivering modern, efficient, and code-compliant mechanical and electrical solutions for residential and commercial developments in Nigeria.'
    },
    {
        id: 2,
        Status:"Completed",
        image: J77B,
        sideImage:[
            {id:1, img:J77B1},
            {id:2, img:J77B2},
            {id:3, img:J77B3},
            
        ],
        Title:"J77B",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "Lagos state",
        date: "2023",
        engineers: "3",
        duration: "1 months",
        Client: "PRIVATE",
        Overview: "Topklan Engineering Services was engaged to undertake a complete mechanical and electrical (M&E) design package for a premium development codenamed J77B. The project required the integration of modern, efficient, and safety-regulated building services that align with the client’s vision of a contemporary, functional, and sustainable facility.",
        Overview2:"This initiative was aimed at providing end-to-end technical solutions that address both the operational demands and comfort needs of the building's occupants while ensuring compliance with regulatory codes and optimizing for energy efficiency.",
        Architect: "IDLEWOODS LIMITED",
        Category:'Structural',
        intro: 'The J77B project reaffirms Topklan Engineering Services capacity to handle complex and bespoke mechanical and electrical design services for modern residential and commercial buildings.'
    },
    {
        id: 3,
        Status:"Design",
        image: CourtHouse,
        sideImage:[
            {id:1, img:CourtHouse},
            {id:2, img:CourtHous2},
            {id:3, img:CourtHous4},
            
        ],
        Title:"ILORIN COURT HOUSE",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "ILORIN KWARA STATE",
        date: "2022",
        engineers: "4",
        duration: "3 months",
        Client: "KWARA STATE MINISTRY OF HEALTH",
        Overview: "Topklan Engineering Services was commissioned to provide comprehensive mechanical and electrical (M&E) design solutions for the new Ilorin Courthouse Complex — a strategic government infrastructure project aimed at improving judicial service delivery in Kwara State.",
        Overview2:"The scope demanded modern, durable, and security-conscious utility systems that would support daily courthouse operations, ensure the comfort of occupants, and comply with stringent government regulations and safety codes.",
        Overview3:"This project required expert integration of energy-efficient mechanical systems and robust electrical infrastructure within a multi-functional legal environment.",
        Architect: "IDLEWOODS LIMITED",
        Category:'Electrical',
        intro: 'The successful execution of the Ilorin Courthouse mechanical and electrical design services demonstrates Topklan Engineering Services expertise in delivering high-value, mission-critical infrastructure projects. '
    },
    {
        id: 4,
        Status:"Design",
        image: Ikoya,
        sideImage:[
            {id:1, img:Ikoya1},
            {id:2, img:Ikoya2},
            {id:3, img:Ikoya4},
            
        ],
        Title:"IKOYA",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "LAGOS STATE",
        date: "2023",
        engineers: "6",
        duration: "3 months",
        Client: "PRIVATE",
        Overview: "Topklan Engineering Services was contracted to deliver comprehensive mechanical and electrical (M&E) design services for a prestigious property development located in Ikoya, Lagos. The project demanded modern, efficient, and technically sound M&E systems that would support a high-end living and working environment while ensuring safety, durability, and compliance with both local and international standards.",
        Overview2:"The Ikoya project involved a multi-unit residential building and commercial spaces, requiring a carefully integrated utility design approach to maximize operational efficiency and user comfort.",
        Architect: "IDLEWOODS LIMITED",
        Category:'Structural',
        intro: 'The Ikoya mechanical and electrical design services project further exemplifies Topklan Engineering Services’ capability in delivering complex, high-value M&E solutions for premium developments. '
    },
    {
        id: 5,
        Status:"Design",
        image: BlackStone,
        sideImage:[
            {id:1, img:Ikoya1},
            {id:2, img:Ikoya2},
            {id:3, img:Ikoya4},
            
        ],
        Title:"BLACKSTONE TOWERS",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "BANANA ISLAND LAGOS STATE",
        date: "2023",
        engineers: "6",
        duration: "3 months",
        Client: "MéTIS BANANA ISLAND DEVELOPMENT",
        Overview: "Topklan Engineering Services was commissioned to execute a comprehensive mechanical and electrical (M&E) design and supervision package for Blackstone Towers, a contemporary high-rise residential and mixed-use building project.",
        Overview2:"The development’s vision was to deliver a sophisticated, efficient, and future-ready facility equipped with modern amenities and infrastructure. The project demanded technical expertise to integrate high-performance mechanical and electrical systems tailored to the building’s operational demands, while ensuring user comfort, safety, and long-term sustainability.",
        Architect: "IDLEWOODS LIMITED",
        Category:'Mechanical',
        intro: 'The successful delivery of Blackstone Towers’ mechanical and electrical design services reaffirms Topklan Engineering Services’ expertise in handling technically demanding, premium-grade projects. '
    },
    {
        id: 6,
        Status:"Completed",
        image: Altona,
        sideImage:[
            {id:1, img:Altona},
            {id:2, img:Altona2},
            {id:3, img:Altona3},
            
        ],
        Title:"THE ALTONA",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "IKOYI LAGOS STATE",
        date: "2024",
        engineers: "5",
        duration: "2 months",
        Client: "ABIGAEL MICHAEL PROPERTIES",
        Overview: "Topklan Engineering Services was engaged to provide full-scale mechanical and electrical (M&E) design solutions for The Altona, a premium residential development positioned to set new standards in luxury, comfort, and energy efficiency.",
        Overview2:"This high-end project required a sophisticated integration of mechanical and electrical systems that align with international best practices, energy efficiency goals, and modern living standards. Topklan’s role was to deliver technical design excellence while ensuring maintainability, safety, and a seamless user experience for occupants.",
        Architect: "IDLEWOODS LIMITED",
        Category:'Electrical',
        intro: 'The Altona Project reflects Topklan Engineering Services continued commitment to delivering best-in-class mechanical and electrical engineering solutions.. '
    },
    {
        id: 7,
        Status:"Completed",
        image: Lantern,
        sideImage:[
            {id:1, img:Lantern1},
            {id:2, img:Lantern3},
            {id:3, img:Lantern4},
            {id:4, img:Lantern5},
            {id:5, img:Lantern6},
            
        ],
        Title:"THE LANTERN HOUSE",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "BANANA ISLAND, LAGOS STATE",
        date: "2022",
        engineers: "8",
        duration: "3 months",
        Client: "",
        Overview: "Topklan Engineering Services was contracted to provide comprehensive mechanical and electrical (M&E) design services for The Lantern House, a premium residential development characterized by contemporary architecture, high-end living standards, and a focus on energy efficiency and modern amenities.",
        Overview2:"The project demanded the delivery of seamless, efficient, and sustainable M&E systems that align with international design standards while ensuring occupant comfort, operational reliability, and long-term maintainability. Topklan’s scope covered the full mechanical and electrical system designs, from concept development to detailed drawings and specifications.",
        Architect: "CMDESIGN ATELIER",
        Category:'Mechanical',
        intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos repellat deleniti natus mollitia itaque tenetur reiciendis. Beatae, doloribus explicabo!'
    },
    {
        id: 8,
        Status:"Construction",
        image: ONL,
        sideImage:[
            {id:1, img:ONL1},
            {id:1, img:ONL2},
            {id:2, img:ONL3},
            {id:3, img:ONL4},
            {id:4, img:ONL5},
            {id:5, img:ONL6},
            
        ],
        Title:"ONL OFFICE",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "YABA, LAGOS STATE",
        date: "2023",
        engineers: "4",
        duration: "3 months",
        Client: "ONL GROUP",
        Overview: "Topklan Engineering Services was appointed to provide a full suite of mechanical and electrical (M&E) design services for the development of ONL Office, a modern corporate office building designed to support a dynamic and efficient work environment.",
        Overview2:"The project required technically advanced, energy-efficient, and scalable M&E systems that could meet the demands of a high-occupancy, technology-driven office space. Topklan’s role involved delivering integrated utility designs that prioritized operational reliability, user comfort, and compliance with regulatory standards.",
        Architect: "BARON ARCHITECTURE",
        Category:'Mechanical',
        intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos repellat deleniti natus mollitia itaque tenetur reiciendis. Beatae, doloribus explicabo! '
    },
    {
        id: 9,
        Status:"Construction",
        image: Shore,
        sideImage:[
            {id:1, img:ONL1},
            {id:1, img:ONL2},
            {id:2, img:ONL3},
            {id:3, img:ONL4},
            {id:4, img:ONL5},
            {id:5, img:ONL6},
            
        ],
        Title:"THE SHORE JABI",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "JABI LAKE, FCT, ABUJA",
        date: "2023",
        engineers: "3",
        duration: "1 month",
        Client: "7-FIFTEEN",
        Overview: "Topklan Engineering Services was appointed to provide a full suite of mechanical and electrical (M&E) design services for the development of ONL Office, a modern corporate office building designed to support a dynamic and efficient work environment.",
        Overview2:"The project required technically advanced, energy-efficient, and scalable M&E systems that could meet the demands of a high-occupancy, technology-driven office space. Topklan’s role involved delivering integrated utility designs that prioritized operational reliability, user comfort, and compliance with regulatory standards.",
        Architect: "BARON ARCHITECTURE",
        Category:'Structural',
        intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos repellat deleniti natus mollitia itaque tenetur reiciendis. Beatae, doloribus explicabo! '
    },
    {
        id: 10,
        Status:"Construction",
        image: KwaraIRS,
        sideImage:[
            {id:1, img:KwaraIRS01},
            {id:1, img:KwaraIRS1},
            {id:2, img:KwaraIRS2},
            
        ],
        Title:"KWARA INTERNAL REVENUE SERVICE (KIRS)",
        services: "MECHANICAL AND ELECTRICAL DESIGN SERVICES",
        location: "ILORIN, KWARA STATE",
        date: "2024",
        engineers: "5",
        duration: "1 month",
        Client: "KWARA STATE GOVERNMENT",
        Overview: "Topklan Engineering Services was appointed to provide a full suite of mechanical and electrical (M&E) design services for the development of ONL Office, a modern corporate office building designed to support a dynamic and efficient work environment.",
        Overview2:"The project required technically advanced, energy-efficient, and scalable M&E systems that could meet the demands of a high-occupancy, technology-driven office space. Topklan’s role involved delivering integrated utility designs that prioritized operational reliability, user comfort, and compliance with regulatory standards.",
        Architect: "BARON ARCHITECTURE",
        Category:'Electrical',
        intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos repellat deleniti natus mollitia itaque tenetur reiciendis. Beatae, doloribus explicabo! '
    },
]