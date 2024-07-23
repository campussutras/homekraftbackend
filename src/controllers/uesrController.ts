import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { sendGeneratePasswordMail } from "../utils/sendGeneratePasswordMail";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;

const expiresIn = 60 * 60 * 24 * 7;

const generateToken = ({
  id,
  empID,
  isAdmin,
}: {
  id: string;
  empID: string;
  isAdmin: boolean;
}) => {
  return jwt.sign(
    {
      id: id,
      empID: empID,
      isAdmin: isAdmin,
    },
    // @ts-ignore
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

const generateAccessToken = ({
  id,
  empID,
  isAdmin,
}: {
  id: string;
  empID: string;
  isAdmin: boolean;
}) => {
  return jwt.sign(
    {
      id: id,
      empID: empID,
      isAdmin: isAdmin,
    },
    // @ts-ignore
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const bulkUserSignup = async (req: Request, res: Response) => {
  try {
    const createMany = await prisma.user.createMany({
      data: [
        {
          empID: "AT0001",
          employeeName: "BHUMIT KAMBOJ",
          department: "MANAGEMENT",
          email: "bhumit.kamboj@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "BL0021",
          employeeName: "ARUN KUMAR PANDEY",
          department: "CRM",
          email: "arun.pandey@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0558",
          employeeName: "HARENDRA KISHOR",
          department: "SAFETY",
          email: "abc.harendra@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "BL0033",
          employeeName: "RAM KISHOR ROY",
          department: "STORE",
          email: "ramkishorroy1982@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "BL0052",
          employeeName: "OM NARAYAN",
          department: "PLUMBING",
          email: "omnarayan2594@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0001",
          employeeName: "ABHISHEK JAIN",
          department: "SALES & MARKETING",
          email: "abhishek.jain@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0008",
          employeeName: "AVANISH KUMAR SINGH",
          department: "MEP",
          email: "avnishsingh312@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0533",
          employeeName: "ANOOP KUMAR",
          department: "SALES & MARKETING",
          email: "anoop.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0010",
          employeeName: "RAJESH KUMAR THAKUR",
          department: "STORE",
          email: "Rkthakur40@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0014",
          employeeName: "PARTOSH PATHAK",
          department: "CIVIL",
          email: "partoshpathak@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0015",
          employeeName: "PRADEEP KUMAR",
          department: "ELECTRICAL",
          email: "pk494022@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0017",
          employeeName: "MOHIT KUMAR",
          department: "CIVIL",
          email: "mohit91survey@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0019",
          employeeName: "INDRAJEET VISHVAS",
          department: "CIVIL",
          email: "inderjeetvishvash844@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0020",
          employeeName: "MOHAN SINGH",
          department: "SALES & MARKETING",
          email: "manishneginegi29@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0023",
          employeeName: "RAHUL MANGLA",
          department: "CRM",
          email: "rahul.mangla@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0024",
          employeeName: "BRAJESH TANWAR",
          department: "IT",
          email: "brajesh.tanwar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0025",
          employeeName: "GARVIT GUPTA",
          department: "MARKETING",
          email: "garvit.gupta@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0026",
          employeeName: "MANHAR SRIVASTAVA",
          department: "SALES & MARKETING",
          email: "manhar.srivastava@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0027",
          employeeName: "GOVIND",
          department: "ADMIN",
          email: "gy1857310@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0012",
          employeeName: "AVDESH KUMAR JHA",
          department: "SALES & MARKETING",
          email: "avdesh.jha@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0029",
          employeeName: "SANTOSH CHAUDHARY",
          department: "CIVIL",
          email: "santoshchoudhary1334@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0031",
          employeeName: "ANSHUMAN PRATIK",
          department: "SALES & MARKETING",
          email: "anshuman.prratik@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0032",
          employeeName: "DEEPAK",
          department: "ADMIN",
          email: "",
          password: "Homekraft@123",
        },
        {
          empID: "CL0033",
          employeeName: "GAURAV SHARMA",
          department: "CRM",
          email: "gaurav.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0034",
          employeeName: "GOVIND NARAYAN GOEL",
          department: "CIVIL",
          email: "govindnarayangoel395@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0015",
          employeeName: "AWDHESH KUMAR MISHRA",
          department: "FACILITY MGMT",
          email: "awdheshm94@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0036",
          employeeName: "BHARAT BHUSHAN",
          department: "E&M",
          email: "iravishmasta@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW028",
          employeeName: "AKSHIT TYAGI",
          department: "CONSTRUCTION",
          email: "akshit17052000@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW032",
          employeeName: "HARIOM SHARMA",
          department: "STORE",
          email: "sharmag101076@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW037",
          employeeName: "UDAY KUMAR",
          department: "ELECTRICAL",
          email: "udaycucek1@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW038",
          employeeName: "RAJNISH KUMAR",
          department: "CIVIL",
          email: "rk3628562@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW039",
          employeeName: "PAWAN KUMAR SHUKLA",
          department: "CIVIL",
          email: "shuklapk402@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW040",
          employeeName: "SHUSHIL KUMAR",
          department: "QUALITY",
          email: "sunil8076kumar@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW041",
          employeeName: "PANKAJ SATI",
          department: "CIVIL",
          email: "pankaj.sati1995@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW042",
          employeeName: "SHIVENDER KUMAR",
          department: "SAFETY",
          email: "shivenderkali@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW043",
          employeeName: "SANDEEP GOSWAMY",
          department: "CIVIL",
          email: "sandeepgoswamy121@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW045",
          employeeName: "VIRENDRA BHATIA",
          department: "CIVIL",
          email: "virendrabaitha@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW046",
          employeeName: "PRASHANT KUMAR SINGH",
          department: "E&M",
          email: "prashantkhejuri@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW047",
          employeeName: "SHEELENDRA PAL SINGH",
          department: "E&M",
          email: "singhsheelendra1963@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0498",
          employeeName: "DEEPAK",
          department: "PLANNING",
          email: "deepak2575636@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW049",
          employeeName: "MANVIR PRASAD TIWARI",
          department: "SITE ADMIN",
          email: "mptiwari699@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW050",
          employeeName: "RAVINDRA KUMAR SINGH",
          department: "CONSTRUCTION",
          email: "ravindra@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "EW051",
          employeeName: "TARUN",
          department: "BILLING",
          email: "tarunraj351@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW052",
          employeeName: "MUHMMAD SAKIR ANSARI",
          department: "FABRICATION",
          email: "shakirmd859@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW053",
          employeeName: "HARIKESH SINGH YADAV",
          department: "CIVIL",
          email: "harikeshsinghyadav501@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW054",
          employeeName: "RAM NARESH KUMAR",
          department: "E&M",
          email: "anujk963952@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW056",
          employeeName: "ANUJ KUMAR SHARMA",
          department: "CIVIL",
          email: "anujmudgal311@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW057",
          employeeName: "ANIL KUMAR",
          department: "CIVIL",
          email: "anilkrsharma67@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW058",
          employeeName: "AMJAD KHAN",
          department: "CIVIL",
          email: "amjadararia88@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW059",
          employeeName: "MOHD INTIKHAB",
          department: "SAFETY",
          email: "sherurajupuriya21@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW060",
          employeeName: "SURENDAR PARSAD",
          department: "PLUMBING",
          email: "surendraprasad296@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW061",
          employeeName: "SANJAY KUMAR",
          department: "MEP",
          email: "sanjoo.baba@hotmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW062",
          employeeName: "RAVI",
          department: "ELECTRICAL",
          email: "ravir113398@gmailcom",
          password: "Homekraft@123",
        },
        {
          empID: "EW063",
          employeeName: "SONU PRAJAPATI",
          department: "E&M",
          email: "sonuprajapati@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW064",
          employeeName: "BIPIN KUMAR MISHRA",
          department: "CONSTRUCTION",
          email: "bipinmishra5615@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW065",
          employeeName: "VIKASH SHARMA",
          department: "CIVIL",
          email: "vikkysharma0134@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW066",
          employeeName: "BABLU KUMAR",
          department: "CIVIL",
          email: "bkumar1920@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW068",
          employeeName: "SHASHI SHARMA",
          department: "CIVIL",
          email: "sharmashasi03@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW069",
          employeeName: "SANTOSH KUMAR SINGH",
          department: "CIVIL",
          email: "",
          password: "Homekraft@123",
        },
        {
          empID: "EW070",
          employeeName: "MAHESH KUMAR",
          department: "ADMIN",
          email: "maheshchauhan09108@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0003",
          employeeName: "SUBHASH KUMAR",
          department: "CIVIL",
          email: "subhash.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FL0005",
          employeeName: "AMIR KHAN",
          department: "E&M",
          email: "amir.khan@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FL0006",
          employeeName: "KAPIL BHATI",
          department: "E&M",
          email: "kapil.bhati@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FL0007",
          employeeName: "JITENDRA KUMAR SINGH",
          department: "E&M",
          email: "jitendra.1963.singh@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0008",
          employeeName: "PARITOSH KUMAR SINGH",
          department: "ADMIN",
          email: "paritoshkumarsingh88@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0011",
          employeeName: "PHULENA DAS",
          department: "CIVIL",
          email: "phulenakumar@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0012",
          employeeName: "ALOK BISWAS",
          department: "E&M",
          email: "atsalok8@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0013",
          employeeName: "ANIL KUMAR",
          department: "E&M",
          email: "anilkumar44967@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0015",
          employeeName: "JYOTI JWALA JAINENDRAM",
          department: "CRM",
          email: "jyotijwala.jainendram@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FL0020",
          employeeName: "VARUN KUMAR",
          department: "QUALITY",
          email: "varunqc@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0028",
          employeeName: "MOHSIN  ALAM",
          department: "CRM",
          email: "mohsin.alam@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0372",
          employeeName: "DINESH KUMAR",
          department: "CIVIL",
          email: "dkchaurasia11@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0032",
          employeeName: "NARENDRA  SINGH",
          department: "ELECTRICAL",
          email: "narendrasingh8650@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0034",
          employeeName: "MANTUN KUMAR",
          department: "CIVIL",
          email: "mantunji23@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0036",
          employeeName: "GOPAL SINGH",
          department: "CIVIL",
          email: "gopalpundir777@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0038",
          employeeName: "AKRAM",
          department: "CIVIL",
          email: "iakramsaifi18@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0042",
          employeeName: "ANIL KUMAR",
          department: "CIVIL",
          email: "mrakchauhan@rediffmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0044",
          employeeName: "UMESH CHAND TYAGI",
          department: "ADMIN",
          email: " vikastyagi550@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0045",
          employeeName: "SUDHIR KUMAR",
          department: "CIVIL",
          email: "sudhir9650116455@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0047",
          employeeName: "SUNIL KUMAR",
          department: "CIVIL",
          email: "sksingh813017@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0048",
          employeeName: "ASHISH SRIVASTAV",
          department: "CIVIL",
          email: "sriashish04@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0051",
          employeeName: "DALVEER SINGH",
          department: "ELECTRICAL",
          email: "dvr1978.singh@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0056",
          employeeName: "ANURAG SHAHARWAL",
          department: "CIVIL",
          email: "anurag.shaharwal@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0060",
          employeeName: "SAURABH KUMAR",
          department: "CIVIL",
          email: "saurabh.aitkumar@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0063",
          employeeName: "VIJAY TAANTI",
          department: "CIVIL",
          email: "vijayraj661987@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0067",
          employeeName: "DEEPAK",
          department: "CIVIL",
          email: "deepakthakur617@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0068",
          employeeName: "MANOJ KUMAR",
          department: "STORE",
          email: "manojkumar27121991@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0070",
          employeeName: "GOVIND KUMAR CHOUDHARY",
          department: "ACCOUNTS",
          email: "govindimds@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0071",
          employeeName: "GIRIJESH KUMAR MISHRA",
          department: "PLUMBING & F&F",
          email: "gmishra141980@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0073",
          employeeName: "VINOD KUMAR",
          department: "CIVIL",
          email: "kumarvinod.kunal@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0076",
          employeeName: "HARISH CHANDRA YADAV",
          department: "CIVIL",
          email: "harishyadav6840@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0077",
          employeeName: "RAJAN KUMAR",
          department: "CIVIL",
          email: "rajandhiraniyas@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0080",
          employeeName: "PRABHAT SHARMA",
          department: "ADMIN",
          email: "prabhatpandit1998@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0081",
          employeeName: "AATESH GOYAL",
          department: "E&M",
          email: "goyal.aatesh786@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0082",
          employeeName: "ZEESHAN ALI ",
          department: "CONSTRUCTION",
          email: "zeeshanchoudhary05@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0083",
          employeeName: "MANOJ KUMAR SHARMA",
          department: "E&M",
          email: "manojsharma63584@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0086",
          employeeName: "AKSHAY CHOUDHARY",
          department: "CONSTRUCTION",
          email: "akshaychoudhary1709@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0087",
          employeeName: "SANTOSH KUMAR",
          department: "CIVIL",
          email: "santoshg.kumar123@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0088",
          employeeName: "ANKUSH RAO",
          department: "SAFETY",
          email: "ankushrao9984@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0089",
          employeeName: "ANGAD KUMAR",
          department: "QUALITY",
          email: "angadkumar7541@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0090",
          employeeName: "MANDEEP KUMAR ",
          department: "E&M",
          email: " Mandeepkumar97746@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0092",
          employeeName: "MOHAMMAD SALIM",
          department: "CIVIL",
          email: "mohammadsalim4804@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0093",
          employeeName: "NIRBHAY KUMAR RANJAN",
          department: "E&M",
          email: "nirbhayranjan01@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0447",
          employeeName: "VISHAL KUMAR",
          department: "QUALITY",
          email: "ervishalkumar64@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0098",
          employeeName: "ANUJ KUMAR",
          department: "CIVIL",
          email: "ak906833@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0100",
          employeeName: "GIRJESH KUMAR",
          department: "CIVIL",
          email: "girjesh02081987@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0101",
          employeeName: "ALOK KUMAR SHAHI",
          department: "ELECTRICAL",
          email: "alok.kumar930@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0102",
          employeeName: "KRISHNA KUMAR",
          department: "CIVIL",
          email: "krishna.mama06754@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0103",
          employeeName: "RAJU KUMAR",
          department: "CIVIL",
          email: "rajuk056@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0105",
          employeeName: "RAMANAND SAH",
          department: "CIVIL",
          email: "ramanandsahsah82944@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0106",
          employeeName: "LAL BAHADUR",
          department: "CIVIL",
          email: "lalbahadur19909818@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0107",
          employeeName: "MD BABAR KHAN",
          department: "CIVIL",
          email: "babar0626@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0108",
          employeeName: "PREM CHANDRA",
          department: "CIVIL",
          email: "pc2617270@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0109",
          employeeName: "KISHOR KUMAR",
          department: "SAFETY",
          email: "pundhirkishor@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0110",
          employeeName: "AMIT KUMAR SINGH",
          department: "E&M",
          email: "AMITSINGH@GMAIL.COM",
          password: "Homekraft@123",
        },
        {
          empID: "FL0111",
          employeeName: "SHRAYANSH",
          department: "CIVIL",
          email: "shrayanshkumar01@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0114",
          employeeName: "SAVIR KHAN",
          department: "CIVIL",
          email: "savirkhan29011994@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0115",
          employeeName: "AJAY KUMAR SINGH",
          department: "E&M",
          email: "ajaykumara7700@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0117",
          employeeName: "ABHIRANJAN CHOUDHARY",
          department: "SAFETY",
          email: "choudharyabhiranjan@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0118",
          employeeName: "DEEPAK SINGH",
          department: "CIVIL",
          email: "deepakchouhandc5738439@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0119",
          employeeName: "SHIV KUMAR",
          department: "CIVIL",
          email: "shivkumar85278@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0120",
          employeeName: "NITISH KUMAR",
          department: "CIVIL",
          email: "nitishkumar25282.nk@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0122",
          employeeName: "BOBY CHAUHAN",
          department: "CIVIL",
          email: "boby777chauhan@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0123",
          employeeName: "ANIL KUMAR",
          department: "CIVIL",
          email: "anilup80@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0124",
          employeeName: "YOGESH PANCHAL",
          department: "CIVIL",
          email: "yogeshpanchal713@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0125",
          employeeName: "BRIJMOHAN SINGH YADAV",
          department: "CIVIL",
          email: "bmsingh281@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0126",
          employeeName: "MAHESH KUMAR",
          department: "CIVIL",
          email: "mk414230@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0128",
          employeeName: "ABHISHEK MADHESIYA",
          department: "PLANNING",
          email: "abhi.madheshiya95@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0129",
          employeeName: "AMIT KUMAR",
          department: "STORE",
          email: "9k3175800@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0130",
          employeeName: "LOKESH KUMAR",
          department: "CIVIL",
          email: "rajlokeshp2@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0132",
          employeeName: "FAEEM AHAMAD",
          department: "CIVIL",
          email: "fahamad219@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0134",
          employeeName: "MAHESH KUMAR",
          department: "CIVIL",
          email: "kumarmaheshsingh1996@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0135",
          employeeName: "DHYAN SINGH",
          department: "ELECTRICAL",
          email: "singhdhyan03@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0136",
          employeeName: "SHASHILESH KUMAR OJHA",
          department: "MEP",
          email: "shashilesh.ojha@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0137",
          employeeName: "NEETESH YADAV",
          department: "SAFETY",
          email: "niteshyadav12351@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0138",
          employeeName: "ASHRAF ALI",
          department: "BILLING",
          email: "ali19naaz@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0086",
          employeeName: "JITENDER KUMAR",
          department: "E&M",
          email: "jitender.teotia4384@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0029",
          employeeName: "KAMLESH KUMAR SINGH",
          department: "SAFETY",
          email: "kamleshkumarsingh75@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0003",
          employeeName: "NAVIN KUMAR SHARMA",
          department: "FACILITY MGMT",
          email: "nks9958731@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0004",
          employeeName: "MD. HASAN IMAM",
          department: "FACILITY MGMT",
          email: "hasanimam021983@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0005",
          employeeName: "ASHISH BHARGAVA",
          department: "FACILITY MGMT",
          email: "ashish.bhargava@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FM0006",
          employeeName: "SUNNY KUMAR",
          department: "FACILITY MGMT",
          email: "sunny.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FM0007",
          employeeName: "BAKEEL",
          department: "FACILITY MGMT",
          email: "bakeel51685@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0008",
          employeeName: "GAURAV KUMAR",
          department: "FACILITY MGMT",
          email: "gks09990@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0010",
          employeeName: "LOKENDRA SINGH",
          department: "FACILITY MGMT",
          email: "singhlokendra032@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0011",
          employeeName: "MANEESH KUMAR SINGH",
          department: "FACILITY MGMT",
          email: "maneeshsingh79@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0012",
          employeeName: "GAURAV SINGH",
          department: "ACCOUNTS",
          email: "gaurav.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0538",
          employeeName: "SANDEEP KUMAR KATIYAR",
          department: "STORE",
          email: "katiyarsandeep488@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0014",
          employeeName: "VIKASH KUMAR ",
          department: "FACILITY MGMT",
          email: "vikash210694@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0074",
          employeeName: "LOKESH",
          department: "SITE ADMIN",
          email: "lokesh.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FM0016",
          employeeName: "MOHIT KUMAR VERMA",
          department: "FACILITY MGMT",
          email: "mohitverma377@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0017",
          employeeName: "MUSTKIM KHAN",
          department: "FACILITY MGMT",
          email: "mustkimkhanofficial1@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0018",
          employeeName: "MANISH SINGH PAL",
          department: "FACILITY MGMT",
          email: "manish.pal@homkeraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FM0019",
          employeeName: "NITIN LEHRA",
          department: "FACILITY MGMT",
          email: "nitin.lehra@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FM0020",
          employeeName: "ARUN KUMAR",
          department: "FACILITY MGMT",
          email: "kumar.arun1464@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0021",
          employeeName: "MOHD SADDAM",
          department: "FACILITY MGMT",
          email: "mdsaddam748@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0022",
          employeeName: "JAYVIR SINGH",
          department: "FACILITY MGMT",
          email: "jayvir106064.dei@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0008",
          employeeName: "JASBIR SINGH",
          department: "SALES & MARKETING",
          email: "jasbir.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "BL0030",
          employeeName: "NEERAJ ",
          department: "CRM",
          email: "neeraj.chaudhary@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FM0001",
          employeeName: "RAHUL KUMAR",
          department: "FACILITY MGMT",
          email: "rahul.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0015",
          employeeName: "MANOJ KUMAR SHARMA",
          department: "SALES & MARKETING",
          email: "manoj.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0016",
          employeeName: "ANKIT GOENKA",
          department: "BUSINESS DEVELOPMENT",
          email: "ankit.goenka@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0018",
          employeeName: "NEERAJ SINGH",
          department: "SALES & MARKETING",
          email: "happytrails.gre@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0021",
          employeeName: "KUMAR MALAY",
          department: "CIVIL",
          email: "kumarmalaysrivastav@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0230",
          employeeName: "RAKESH LAL SRIVASTAVA",
          department: "CONSTRUCTION",
          email: "rakesh.shrivastava@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0024",
          employeeName: "PUNEET TRIPATHI",
          department: "ACCOUNTS",
          email: "puneet.tripathi@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0027",
          employeeName: "VIKAS SHARMA",
          department: "ACCOUNTS",
          email: "vikas.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0028",
          employeeName: "LAKHAN PAL SINGH",
          department: "SALES & MARKETING",
          email: "lakhanpal.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0029",
          employeeName: "HARISH SHISHAUDIYA",
          department: "ACCOUNTS",
          email: "harish.sisodiya@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0030",
          employeeName: "ASHOK SINGH",
          department: "ELECTRICAL",
          email: "ashokkumarji879@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0038",
          employeeName: "DAYAL SINGH",
          department: "SALES & MARKETING",
          email: "dsingh319@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0044",
          employeeName: "GANESH KUMAR CHOUDHARY",
          department: "CIVIL",
          email: "ganeshchy5@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0046",
          employeeName: "HANS KUMAR TYAGI",
          department: "SALES & MARKETING",
          email: "hans.tyagi@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0047",
          employeeName: "ARUN KUMAR",
          department: "ELECTRICAL",
          email: "arun.kumarbsacet@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0051",
          employeeName: "KAPIL SINGH",
          department: "DESIGN & DEV",
          email: "kapil.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0053",
          employeeName: "UPENDRA PANDEY",
          department: "CIVIL",
          email: "upendrapandey92890@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0054",
          employeeName: "VIKASH KUMAR MANDAL",
          department: "CIVIL",
          email: "kumarvikas0327@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0055",
          employeeName: "HITESH MITTAL",
          department: "ACCOUNTS",
          email: "hitesh.mittal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0057",
          employeeName: "DEEPAK KUMAR",
          department: "CRM",
          email: "deepak.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0059",
          employeeName: "GANESH SINGH",
          department: "SALES & MARKETING",
          email: "ganesh.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0061",
          employeeName: "BALJEET SINGH",
          department: "CRM",
          email: "baljeet.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0063",
          employeeName: "GOPAL JI DUBEY",
          department: "STORE",
          email: "gopaljidubey29@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0067",
          employeeName: "VIJAY KUMAR SINGH",
          department: "CIVIL",
          email: "vijaysinghchendel@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0070",
          employeeName: "GANGA PRASAD PANDIT",
          department: "CIVIL",
          email: "prasadjiganga61@yahoo.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0071",
          employeeName: "VIKAS KUMAR",
          department: "CIVIL",
          email: "vikaskumarrajput986@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0035",
          employeeName: "RAVISH MASTA",
          department: "SALES & MARKETING",
          email: "ravish.masta@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0078",
          employeeName: "RISHANK RASTOGI",
          department: "PLANNING",
          email: "rishankrastogi1997@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0079",
          employeeName: "DEEPAK GUPTA",
          department: "CIVIL",
          email: "deepak.gupta@homkeraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0082",
          employeeName: "RAM KHILAVAN KARSH",
          department: "CIVIL",
          email: "ramkhilavankarsh007@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FL0096",
          employeeName: "SANJEEV KUMAR",
          department: "CIVIL",
          email: "sanjeevku06@yahoo.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0095",
          employeeName: "HARNAM SINGH",
          department: "CIVIL",
          email: "harnamsisodya.2014@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0096",
          employeeName: "MAHESH KUMAR SAHNI",
          department: "ACCOUNTS",
          email: "mahesh.sahni@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0098",
          employeeName: "ANUJ SEN",
          department: "ACCOUNTS",
          email: "anuj.sen@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0099",
          employeeName: "SABHAJEET YADAV",
          department: "QUALITY",
          email: "sabhajeetyadav786@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0100",
          employeeName: "VINOD SINGH",
          department: "E&M",
          email: "vinodsingh04838@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0101",
          employeeName: "OM PRAKASH PANDEY",
          department: "E&M",
          email: "op.pandey0884@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0102",
          employeeName: "SIDDHARTH SINGH",
          department: "ACCOUNTS",
          email: "siddharth.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0103",
          employeeName: "NARESH KUMAR",
          department: "CIVIL",
          email: "kumarnaresh41285@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0105",
          employeeName: "SAURABH RAWAL",
          department: "SALES & MARKETING",
          email: "saurabh.rawal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0112",
          employeeName: "MOHSIN KHAN",
          department: "SALES & MARKETING",
          email: "mohsin.khan@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0113",
          employeeName: "ANIRUDH KUMAR",
          department: "ACCOUNTS",
          email: "anirudh.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0117",
          employeeName: "VINAY KUMAR",
          department: "CIVIL",
          email: "yadav.vinay9811@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0118",
          employeeName: "BIJAY KRISHNA SARKAR",
          department: "QUALITY",
          email: "bijaykrishana1984@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0119",
          employeeName: "BIJAY KUMAR",
          department: "CIVIL",
          email: "bijay.mcpl@yahoo.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0121",
          employeeName: "JITENDRA KUMAR",
          department: "CIVIL",
          email: "jksingh991139@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0124",
          employeeName: "ANIL KUMAR MISHRA",
          department: "E&M",
          email: "anilmishra7794@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0125",
          employeeName: "RAHUL KUMAR JHA",
          department: "E&M",
          email: "rahul9540232874@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0129",
          employeeName: "PIYUSH KUMAR SRIVASTAVA",
          department: "CIVIL",
          email: "krish10aug@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0130",
          employeeName: "SANJAY KUMAR",
          department: "CIVIL",
          email: "skumarnader@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0131",
          employeeName: "DHARAM PAL SINGH",
          department: "CIVIL",
          email: "singhdharmpal726@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0135",
          employeeName: "KRISHNA KANT MISHRA",
          department: "CIVIL",
          email: "krishnakantmishra103@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0139",
          employeeName: "JAIMEET SINGH",
          department: "DESIGN & DEV",
          email: "jaimeet.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0145",
          employeeName: "RAKESH KUMAR THAKUR",
          department: "STORE",
          email: "rakeshkthakur1974@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0146",
          employeeName: "PRABHASH CHANDRA KUMAR",
          department: "CIVIL",
          email: "pckumar405@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0147",
          employeeName: "MANISH KUMAR GUPTA",
          department: "DESIGN & DEV",
          email: "manish.gupta@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0150",
          employeeName: "PORAS",
          department: "CIVIL",
          email: "sardana.poras98@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0152",
          employeeName: "MANOJ KUMAR",
          department: "PLUMBING & F&F",
          email: "manojmansh88@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0153",
          employeeName: "SHUBHAM TANDON",
          department: "PLUMBING & F&F",
          email: "shubham.tandon@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0159",
          employeeName: "CHANDAN KUMAR",
          department: "CIVIL",
          email: "chandankumar1214@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0160",
          employeeName: "PRAVESH CHANDRA SHUKLA",
          department: "CIVIL",
          email: "ps074744@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0164",
          employeeName: "DEVENDRA SINGH",
          department: "SITE ADMIN",
          email: "ds15051967@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0167",
          employeeName: "MOHIT ARORA",
          department: "MANAGEMENT",
          email: "mohit.arora@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0171",
          employeeName: "SATISH REDHU",
          department: "FINISHING",
          email: "satishkandela91@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0175",
          employeeName: "SUNEEL KUMAR",
          department: "E&M",
          email: "singhsunil39108@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0177",
          employeeName: "NEERAJ SHARMA",
          department: "CIVIL",
          email: "neerajsharma41187@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0178",
          employeeName: "KAPIL KUMAR",
          department: "CIVIL",
          email: "kapilkmr.kumar0@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0182",
          employeeName: "SAKSHI SEHGAL",
          department: "MANAGEMENT",
          email: "sakshi.sehgal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0186",
          employeeName: "NIKHIL GOLANI",
          department: "Strategic Transformation",
          email: "nikhil.golani@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0190",
          employeeName: "MITHLESH GUPTA",
          department: "CIVIL",
          email: "mgupta.gupta786@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0191",
          employeeName: "ANIL PANDEY",
          department: "CIVIL",
          email: "anilpandey4537@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0195",
          employeeName: "RAVINDER KUMAR",
          department: "ELECTRICAL",
          email: "ravinder.omaxe@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0196",
          employeeName: "DHIRENDRA BAHADUR SINGH",
          department: "PLUMBING & F&F",
          email: "sonuar131@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0197",
          employeeName: "PRAVIN KUMAR SHARMA",
          department: "QUALITY",
          email: "vipinsharma45662@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0198",
          employeeName: "SANTOSH KUMAR SINGH",
          department: "SAFETY",
          email: "sksingh96610@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0204",
          employeeName: "AJAY SINGH",
          department: "CIVIL",
          email: "ajaychauhan8076@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0208",
          employeeName: "MOHD KASIM",
          department: "CIVIL",
          email: "kasimmansoori.1992@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0209",
          employeeName: "DIPIKA PAL",
          department: "SALES & MARKETING",
          email: "dipika.pal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0210",
          employeeName: "ANUJ KUMAR",
          department: "CRM",
          email: "anujkumar0868@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0211",
          employeeName: "SHIVAM OJHA",
          department: "CRM",
          email: "ojha.shivam@outlook.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0213",
          employeeName: "KULDEEP KUMAR",
          department: "STORE",
          email: "kuldeepkumar2658@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0215",
          employeeName: "PRADEEP KUMAR",
          department: "Supply Chain Management",
          email: "pradeep.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0216",
          employeeName: "PRINCE SINGH",
          department: "IT",
          email: "prince.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0217",
          employeeName: "YUVRAJ SINGH",
          department: "MARKETING",
          email: "yuvraj.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0218",
          employeeName: "YOGESH KUMAR SHARMA",
          department: "ACCOUNTS",
          email: "yogesh.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0223",
          employeeName: "ANKIT CHOHAN",
          department: "PLUMBING & F&F",
          email: "ankit64chauhan@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0228",
          employeeName: "UMESH KUMAR",
          department: "CIVIL",
          email: "umesh8316@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0229",
          employeeName: "RANJEET KUMAR GUPTA",
          department: "CIVIL",
          email: "ranjeetkumargupta25@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0022",
          employeeName: "SARATH KUMAR PANDIYAN",
          department: "BILLING",
          email: "sarath.pandiyan@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0231",
          employeeName: "SOHAN KUMAR",
          department: "ADMIN",
          email: "sohankumar05380@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0234",
          employeeName: "UMESH PRASAD",
          department: "CIVIL",
          email: "up675921parsad@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0241",
          employeeName: "JUNG BAHADUR DUBEY",
          department: "CIVIL",
          email: "dubeyjb1@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0243",
          employeeName: "RAJESH KUMAR",
          department: "HUMAN RESOURCE",
          email: "rajesh.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0244",
          employeeName: "RAM GOPAL",
          department: "CIVIL",
          email: "rangers72423@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0251",
          employeeName: "SHUBHAM MAURYA",
          department: "HUMAN RESOURCE",
          email: "shubham.maurya@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0254",
          employeeName: "SANDEEP KUMAR MISHRA",
          department: "CIVIL",
          email: "sandeepkmishra@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0255",
          employeeName: "AMIT KUMAR DUBEY",
          department: "SAFETY",
          email: "safety.nobility@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0256",
          employeeName: "MOHIT SHARMA",
          department: "CIVIL",
          email: "mohithim101@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0257",
          employeeName: "PANKAJ GOSWAMI",
          department: "CIVIL",
          email: "pankajgoswami910@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0260",
          employeeName: "YASHPAL SINGH",
          department: "CIVIL",
          email: " Ys233288@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0262",
          employeeName: "GULAB CHANDRA PAL",
          department: "CIVIL",
          email: " Gulabpal127@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0265",
          employeeName: "ASHRAF ALI",
          department: "PLUMBING",
          email: "ashrafalip4@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0269",
          employeeName: "SANDEEP BHARDWAJ",
          department: "CIVIL",
          email: "srbhardwaj.25d1993@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0271",
          employeeName: "PRAVEEN KUMAR SINGH",
          department: "ADMIN",
          email: "praveenkumarsingh362@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0273",
          employeeName: "RAVI RANJAN KUMAR",
          department: "CIVIL",
          email: "raviranjanku008@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0278",
          employeeName: "ARVIND KUMAR",
          department: "CIVIL",
          email: "kmra620@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0279",
          employeeName: "ARUN SHARMA",
          department: "DESIGN & DEV",
          email: "arun.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0280",
          employeeName: "GAURAV MONGIA",
          department: "STORE",
          email: "gaurav.mongia@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0281",
          employeeName: "VIJAY SINGH",
          department: "CIVIL",
          email: "vijaysinghduds77@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0283",
          employeeName: "SUKHDARSHAN",
          department: "CIVIL",
          email: "sudarshan00005@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0285",
          employeeName: "VIKENDRA SINGH CHAUHAN",
          department: "CIVIL",
          email: "Vikendra.SinghChavhan@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0286",
          employeeName: "DEEPAK KUMAR",
          department: "CIVIL",
          email: "deepaksinghkws@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0290",
          employeeName: "SANJIT KUMAR RAY",
          department: "ELECTRICAL",
          email: "sanjeet.ray201090@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0292",
          employeeName: "UMASHANKAR",
          department: "QUALITY",
          email: "us0461817@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0295",
          employeeName: "DESHRAJ YADAV",
          department: "QUALITY",
          email: "ydeshraj30@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0300",
          employeeName: "JUHU PRAKASH SHRIVASTAVA",
          department: "CRM",
          email: "juhu.shrivastava@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0301",
          employeeName: "AJEET PRATAP SINGH",
          department: "STORE",
          email: "singhajrocky@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0302",
          employeeName: "SUNIL PANWAR",
          department: "ACCOUNTS",
          email: "sunil.panwar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0304",
          employeeName: "SHRI SHYAM YADAV",
          department: "CIVIL",
          email: "srishyamyadav1991@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0307",
          employeeName: "NASIM AHMAD",
          department: "LIAISON",
          email: "nasim.ahmad@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0310",
          employeeName: "KAUSHAL CHOUHAN",
          department: "CIVIL",
          email: "kaushal.unnati80@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0317",
          employeeName: "BALAM SINGH RAWAT",
          department: "ADMIN",
          email: "ssrawat07031969@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0324",
          employeeName: "RAM SAKAL SHARMA",
          department: "CIVIL",
          email: "ramsakal9amrapali@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0327",
          employeeName: "BEERESH",
          department: "CIVIL",
          email: "beereshkumar503@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0328",
          employeeName: "ALOK KUMAR TIWARI",
          department: "ACCOUNTS",
          email: "aloktiwari187@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0333",
          employeeName: "ANANT KUMAR SINHA",
          department: "Supply Chain Management",
          email: "anant.sinha@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0336",
          employeeName: "RAMANIHAL",
          department: "CIVIL",
          email: "nram84157@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0337",
          employeeName: "NEERAJ KUMAR SHARMA",
          department: "CIVIL",
          email: "neerajsharma4932@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0341",
          employeeName: "RANA SINGH",
          department: "CIVIL",
          email: "singhrana233@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0342",
          employeeName: "RAMEEZ RAZA KHAN",
          department: "ACCOUNTS",
          email: "rameezraza.khan@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0344",
          employeeName: "MANMOHAN SINGH",
          department: "HUMAN RESOURCE",
          email: "manmohan.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0348",
          employeeName: "BABAR MURMU",
          department: "E&M",
          email: "babarmurmu@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0350",
          employeeName: "YOGENDRA SINGH CHAUHAN",
          department: "E&M",
          email: "yogendrasinghx@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0353",
          employeeName: "SUNIL KUMAR SINGH",
          department: "CIVIL",
          email: "sunil7521@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0354",
          employeeName: "RADHARAMAN  JHA",
          department: "CIVIL",
          email: "radharamanjha44@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0357",
          employeeName: "SOUVIK RAY",
          department: "CRM",
          email: "souvik.ray@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0358",
          employeeName: "PRATEEK JAIN",
          department: "DESIGN & DEV",
          email: "prateek.jain@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0362",
          employeeName: "NAVNEET GUPTA",
          department: "IT",
          email: "navneet.gupta@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0363",
          employeeName: "NITYANJAI CHOUDHARY",
          department: "DESIGN & DEV",
          email: "nityanjai.choudhary@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0364",
          employeeName: "PARDEEP KUMAR",
          department: "PLUMBING",
          email: "pradeepbazad4433@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0365",
          employeeName: "YAMINI JAIN",
          department: "COMPLIANCE",
          email: "yamini.jain@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0367",
          employeeName: "AMIT LAL TRIPATHI",
          department: "CIVIL",
          email: "amitlaltripathi2@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0371",
          employeeName: "DEEPAK KUMAR",
          department: "CIVIL",
          email: "deepaksengar8735@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0594",
          employeeName: "SATISH KUMAR",
          department: "CIVIL",
          email: "satish.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0373",
          employeeName: "ASHOK SINGH",
          department: "CIVIL",
          email: "singhashok0000@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0374",
          employeeName: "ARVIND KUMAR",
          department: "PLUMBING",
          email: "arvinddevrajput@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0375",
          employeeName: "DINESH KUMAR TIWARI",
          department: "ACCOUNTS",
          email: "tiwaridinesh05@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0377",
          employeeName: "AGHA JARI HUSSAIN",
          department: "PLANNING",
          email: "aghajari.husain@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0379",
          employeeName: "MANSOOR AHMAD",
          department: "CIVIL",
          email: "mansoorahmad9315@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0380",
          employeeName: "RAJAN KUMAR RAJBHAR",
          department: "BILLING",
          email: "rajan.rajbhar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0381",
          employeeName: "BINOD KUMAR MEHTA",
          department: "CIVIL",
          email: "amir.khan@atsgreens.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0383",
          employeeName: "VIKRAM SINGH",
          department: "CIVIL",
          email: "vksingh08071991@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0385",
          employeeName: "SATISH CHANDRA RAI",
          department: "ELECTRICAL",
          email: "satishchandrarai23@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0390",
          employeeName: "DHIRENDRA KUMAR SINGH",
          department: "ADMIN",
          email: "dhirendra.nh58@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0391",
          employeeName: "KAPIL BERIWAL",
          department: "STORE",
          email: "kapilberiwal2@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0392",
          employeeName: "SRI PRAKASH SINGH",
          department: "CIVIL",
          email: "sriprakashsingh1988@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0393",
          employeeName: "DEEPAK",
          department: "SAFETY",
          email: "deepak003300@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0398",
          employeeName: "ANKIT DEVPUTRA",
          department: "IT",
          email: "ankit.devputra@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0401",
          employeeName: "SIDDHARTHA  SARKAR",
          department: "SAFETY",
          email: "siddhartha.sarkar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0403",
          employeeName: "BHUPENDRA SINGH",
          department: "ACCOUNTS",
          email: "bhupendra.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0409",
          employeeName: "Kailash Rathi",
          department: "ACCOUNTS",
          email: "kailash.rathi@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0412",
          employeeName: "Sohrab Malik",
          department: "MANAGEMENT",
          email: "sohrab.malik@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0414",
          employeeName: "Shailesh Kumar Dwivedi",
          department: "CIVIL",
          email: "shaileshdwivediniu@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0418",
          employeeName: "RAJEEV KUMAR SINGH",
          department: "CIVIL",
          email: "rajeev.singh776@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0420",
          employeeName: "KUNAL SINGH",
          department: "CIVIL",
          email: "1512singh.kumar@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0421",
          employeeName: "Premchand Yadav",
          department: "CIVIL",
          email: "premchandyadav028@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0422",
          employeeName: "Saurabh Rai",
          department: "QUALITY",
          email: "shoravx@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0423",
          employeeName: "Rajeev Gupta",
          department: "Government Affairs ",
          email: "rajeev.gupta@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0424",
          employeeName: "Atul Kumar",
          department: "CIVIL",
          email: "atulsagar1989@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0428",
          employeeName: "DHANANJAY SINGH",
          department: "CIVIL",
          email: "dhananjay.ds833@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0433",
          employeeName: "Tushar Goel",
          department: "BUSINESS DEVELOPMENT",
          email: "tushar.goel@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0436",
          employeeName: "NAGENDRA SINGH",
          department: "BILLING",
          email: "nagendra.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0438",
          employeeName: "PARDEEP KUMAR",
          department: "Government Affairs ",
          email: "pardeep.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0439",
          employeeName: "GOVINDA KUMAR",
          department: "E&M",
          email: "govindakumar72773@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0441",
          employeeName: "VIJAY KUMAR ROY",
          department: "QUALITY",
          email: "vijayqc1990@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0442",
          employeeName: "NARESH PANDIT",
          department: "CIVIL",
          email: "nareshpandit9572@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0443",
          employeeName: "NIRANJAN EKKA ",
          department: "SAFETY",
          email: "niranjanekka1987@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0444",
          employeeName: "RAHUL RAJ",
          department: "SALES & MARKETING",
          email: "rahul.raj@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "FM0002",
          employeeName: "SHANKAR JI SINGH",
          department: "FACILITY MGMT",
          email: "shankar.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0448",
          employeeName: "NITIN KUMAR",
          department: "ACCOUNTS",
          email: "nitin@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0449",
          employeeName: "NAJEEB AKHTAR",
          department: "Supply Chain Management",
          email: "najeeb.akhtar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0451",
          employeeName: "CHANDRASH SHARMA",
          department: "CIVIL",
          email: "kuldeepkaushik19944@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0452",
          employeeName: "SANJAY KUMAR THAKUR",
          department: "CIVIL",
          email: "sanjaythakur17290@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0454",
          employeeName: "PRADEEP KUMAR",
          department: "LIAISON",
          email: "pradeepraavi1313@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0456",
          employeeName: "ABHISHEK KUMAR",
          department: "SAFETY",
          email: "abhi98345@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0459",
          employeeName: "UPASANA SAJWAN",
          department: "CRM",
          email: "upasana.sajwan@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0463",
          employeeName: "VIVEK MISHRA",
          department: "ELECTRICAL",
          email: "vivekmishra.vm2501@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0465",
          employeeName: "VISHAL KUMAR",
          department: "ACCOUNTS",
          email: "vishal.kr@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0466",
          employeeName: "ARVIND SHARMA",
          department: "Government Affairs ",
          email: "arvindsharma9050@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0467",
          employeeName: "BHUPENDRA  SHARMA",
          department: "ADMIN",
          email: "sharmabhupendra443@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0470",
          employeeName: "DAYARAM",
          department: "DESIGN & DEV",
          email: "daya88083@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0472",
          employeeName: "VIJAY KUMAR SHARMA",
          department: "MEP",
          email: "vijay.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0474",
          employeeName: "RAJESH SHARMA",
          department: "ADMIN",
          email: "rrajeshsharma0176@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0477",
          employeeName: "AKANKSHA SINGH",
          department: "Supply Chain Management",
          email: "akanksha.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0481",
          employeeName: "ARPIT SINGH",
          department: "BILLING",
          email: "asthakur166@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0483",
          employeeName: "SANJIV KUMAR",
          department: "CIVIL",
          email: "sk645566@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0484",
          employeeName: "SRANJANA BANSAL",
          department: "HUMAN RESOURCE",
          email: "sranjana.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0485",
          employeeName: "HARSH DIXIT",
          department: "SAFETY",
          email: "harsh.dixit@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0486",
          employeeName: "PARAS SHARMA",
          department: "ACCOUNTS",
          email: "paras.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0487",
          employeeName: "DEEPAK",
          department: "CIVIL",
          email: "deepaktyagi010@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0488",
          employeeName: "SIDHANTH SINGH",
          department: "CIVIL",
          email: "singhsidhant024@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0489",
          employeeName: "KHALIQUZZAMA",
          department: "SAFETY",
          email: "khaliquzzama2014@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0490",
          employeeName: "AWADHESH KUMAR",
          department: "STORE",
          email: "yadavawadhesh01@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0491",
          employeeName: "CHANDER DEV YADAV",
          department: "QUALITY",
          email: "chandradevyadav655@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0492",
          employeeName: "ROSHAN LAL",
          department: "CIVIL",
          email: "roshanlal881976@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0493",
          employeeName: "MOHD WASEEM",
          department: "PLUMBING",
          email: "waseemkhanfm@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0494",
          employeeName: "VINAY KUMAR SINGH",
          department: "CIVIL",
          email: "atsvinayji@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0495",
          employeeName: "SATYA NARAYAN SINGH",
          department: "CIVIL",
          email: "satyanarayan7471@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0496",
          employeeName: "RAHUL KUMAR",
          department: "HORTICULTURE",
          email: "rahulbhatilavish@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0497",
          employeeName: "AMIT KUMAR",
          department: "ACCOUNTS",
          email: "amit.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0009",
          employeeName: "SURENDRA KUMAR YADAV",
          department: "SITE ADMIN",
          email: "surendra.yadav@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0499",
          employeeName: "ABHIMANU KUMAR",
          department: "CONSTRUCTION",
          email: "abhimanu.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0500",
          employeeName: "CHANDRAKANT SINGH",
          department: "SITE ADMIN",
          email: "chandrakantsingh10695@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0548",
          employeeName: "TANUJ KUMAR",
          department: "CONSTRUCTION",
          email: "tkumar281@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0503",
          employeeName: "SANJAY SHARMA",
          department: "CIVIL",
          email: "sanjaysharmacivil84@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0504",
          employeeName: "SUDHIR KUMAR SINGH",
          department: "CIVIL",
          email: "sudhir.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0505",
          employeeName: "AMIT KUMAR MISHRA",
          department: "CIVIL",
          email: "amitkumarmishra@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0506",
          employeeName: "SAKSHI ARORA",
          department: "HUMAN RESOURCE",
          email: "sakshi.arora@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0507",
          employeeName: "SHIV KUMAR",
          department: "BILLING",
          email: "shiv.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0508",
          employeeName: "ANIL KUMAR",
          department: "BILLING",
          email: "anil.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0510",
          employeeName: "RAVI KUMAR",
          department: "CRM",
          email: "kamalsubham22@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0512",
          employeeName: "IKRA PARVEEN ",
          department: "CRM",
          email: "ikra.parveen@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0513",
          employeeName: "RAJAN",
          department: "CRM",
          email: "krajan479@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0514",
          employeeName: "GAURAV SHARMA",
          department: "CRM",
          email: "gaurav.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0515",
          employeeName: "RASHMI SINGH",
          department: "CRM",
          email: "rashmi.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0518",
          employeeName: "SURYA PRAKASH  RAJPUT",
          department: "CRM",
          email: "suryaprakash.rajput@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0519",
          employeeName: "SAURABH YADAV",
          department: "DESIGN & DEV",
          email: "saurabh.yadav@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0520",
          employeeName: "ANIL GUPTA",
          department: "DESIGN & DEV",
          email: "anil.gupta@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0521",
          employeeName: "CHHATTARPAL SINGH",
          department: "E&M",
          email: "chhattar.pal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0522",
          employeeName: "ANKUR TYAGI",
          department: "ACCOUNTS",
          email: "ankur.tyagi@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0523",
          employeeName: "LOVEKUSH",
          department: "ACCOUNTS",
          email: "lovekushgee@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0524",
          employeeName: "SACHIN SONI",
          department: "ACCOUNTS",
          email: "sachinsoni7856@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0525",
          employeeName: "PRADEEP KUMAR SINGH",
          department: "FINISHING",
          email: "pradeepking2050@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0529",
          employeeName: "ARVIND KUMAR KUNTAL",
          department: "PLANNING",
          email: "arvind.kuntal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0530",
          employeeName: "NARENDRA SHARMA",
          department: "PLUMBING & F&F",
          email: "narendrasharma0031@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "FM0013",
          employeeName: "MANISH VASHISTH",
          department: "FACILITY MGMT",
          email: "manish.vashisth@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0534",
          employeeName: "PRAMOD KUMAR",
          department: "CRM",
          email: "pramod_ishanc@yahoo.co.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0535",
          employeeName: "ABHIJIT SIDHARTHA",
          department: "SALES & MARKETING",
          email: "abhijit.siddhartha@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0537",
          employeeName: "ANIL KUMAR PRAJAPATI",
          department: "SALES & MARKETING",
          email: "anil.prajapati@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "CL0009",
          employeeName: "PARKASH VEER",
          department: "Government Affairs ",
          email: "prakash.veer@atsgreens.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0539",
          employeeName: "SONU KUMAR DUBEY",
          department: "STORE",
          email: "sonudubey496@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0542",
          employeeName: "TARUN KUMAR",
          department: "CIVIL",
          email: "tarunkumar9548@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0545",
          employeeName: "BHAIRAV DATT",
          department: "CIVIL",
          email: "bharatdevrari@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0547",
          employeeName: "ANSHUMAN SINGH",
          department: "CIVIL",
          email: "anshusinghrajput2018@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0502",
          employeeName: "SANJIV KUMAR",
          department: "CONSTRUCTION",
          email: "vermasanj1985@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0549",
          employeeName: "SONU KUMAR",
          department: "CONSTRUCTION",
          email: "sonusejwal0007@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0551",
          employeeName: "AQIL KHAN",
          department: "MARKETING",
          email: "aqil.khan@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0552",
          employeeName: "BALBINDER SINGH",
          department: "CIVIL",
          email: "balbindersingh639358@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0553",
          employeeName: "MONIKA KUMARI",
          department: "HUMAN RESOURCE",
          email: "monika.kumari@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0555",
          employeeName: "PAWAN KUMAR MAHTO",
          department: "MEP",
          email: "pawanmahtoats29@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0556",
          employeeName: "RAJESH KUMAR",
          department: "E&M",
          email: "rk7675t@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0557",
          employeeName: "RAJESH TYAGI",
          department: "QUALITY",
          email: "rajeshtyagi9799104228@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "CL0028",
          employeeName: "VIKAS KUMAR SHARMA",
          department: "CIVIL",
          email: "vikas22061986@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0559",
          employeeName: "SHASHIKANT MOHAN TRIPATHI",
          department: "ADMIN",
          email: "shashikanmohan.1992@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0561",
          employeeName: "MOHD ADIL KAREEM",
          department: "PLUMBING",
          email: "adilkareem1993@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0562",
          employeeName: "MONIS RAZA HADAREE",
          department: "CIVIL",
          email: "monisraza0005@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0563",
          employeeName: "PANKAJ KUMAR YADAV",
          department: "CIVIL",
          email: "pankajyadav15288@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0564",
          employeeName: "SINGESHWAR PANDIT",
          department: "CIVIL",
          email: "panditsingeshwar1979@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0567",
          employeeName: "NITESH BHATIA",
          department: "Strategic Transformation",
          email: "nitesh.bhatia@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0568",
          employeeName: "ALOK KUMAR SHUKLA",
          department: "ACCOUNTS",
          email: "alok.shukla@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0569",
          employeeName: "MOHD ATIF",
          department: "SAFETY",
          email: "atif05250@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0570",
          employeeName: "ASFAQUE AHAMAD",
          department: "SAFETY",
          email: "asfaque8941@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0571",
          employeeName: "ANKIT PANT",
          department: "ACCOUNTS",
          email: "ankit.pant@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0574",
          employeeName: "SANTOSH SINGH KUSHWAHA",
          department: "ELECTRICAL",
          email: "skushwaha85@yahoo.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0575",
          employeeName: "ASHISH KUMAR",
          department: "CIVIL",
          email: "kashish70009@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0576",
          employeeName: "PRAVENDRA SINGH",
          department: "CIVIL",
          email: "pravendrasingh50255025@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0577",
          employeeName: "ANURAG TYAGI",
          department: "CIVIL",
          email: "anuragtyagi903@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0579",
          employeeName: "BHAWNA SHARMA",
          department: "CRM",
          email: "bhawna.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0581",
          employeeName: "SHAHNAWAJ TALIB",
          department: "PLUMBING",
          email: "er.shah007@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0582",
          employeeName: "RAVI KUMAR",
          department: "Supply Chain Management",
          email: "ravi.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0583",
          employeeName: "MITHLESH KUMAR",
          department: "CIVIL",
          email: "mk9765885@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0584",
          employeeName: "PREM CHAND",
          department: "CIVIL",
          email: "prem616chand@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0585",
          employeeName: "PRADUMAN TIWARI",
          department: "BILLING",
          email: "ptiwari9955@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0586",
          employeeName: "MUNEEB UR RAHMAN",
          department: "HUMAN RESOURCE",
          email: "muneeb.rahman@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0587",
          employeeName: "SUMIT KUMAR",
          department: "CIVIL",
          email: "kumarsumit7740@gmail.com ",
          password: "Homekraft@123",
        },
        {
          empID: "HK0588",
          employeeName: "SUMIT KUMAR SINGH",
          department: "ADMIN",
          email: "sumitsharma009149@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0590",
          employeeName: "JYOTI",
          department: "CRM",
          email: "jyoti@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0592",
          employeeName: "ARAB ADHIRAJ",
          department: "CRM",
          email: "arab.adhiraj@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0593",
          employeeName: "AMIT KUMAR",
          department: "E&M",
          email: "er.amitkumar007@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "EW048",
          employeeName: "SUSHIL KUMAR YADAV",
          department: "SITE ADMIN",
          email: "sushil.kumar@homkeraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0595",
          employeeName: "SAHIL GARG",
          department: "ACCOUNTS",
          email: "sahil.garg@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0596",
          employeeName: "MUKUL SHARMA",
          department: "CIVIL",
          email: "mukulsharma071196@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0597",
          employeeName: "PANKAJ MITTAL",
          department: "QUALITY",
          email: "pankaj.mittal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0598",
          employeeName: "JAGMOHAN SINGH BEDI",
          department: "CRM",
          email: "jagmohansingh.bedi@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0599",
          employeeName: "SUMIRAN",
          department: "CRM",
          email: "sumiran@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0600",
          employeeName: "GOVIND KUMAR KUSHWAHA",
          department: "E&M",
          email: "kushwahagovind465@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0601",
          employeeName: "AKIL AHMAD",
          department: "CIVIL",
          email: "auilahamad1985@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0602",
          employeeName: "KANIKA GUPTA",
          department: "COMPLIANCE",
          email: "kanika.gupta@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0603",
          employeeName: "VIKAS KUMAR CHOUDHARY",
          department: "Supply Chain Management",
          email: "vikash.choudhary@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0604",
          employeeName: "RINKU",
          department: "CIVIL",
          email: "rinkurajput9626@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0605",
          employeeName: "INTZAR ALI",
          department: "STORE",
          email: "intzarkhan762@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0606",
          employeeName: "CHANDAN KUMAR",
          department: "CIVIL",
          email: "chandan21212121@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0607",
          employeeName: "PRADIP KUMAR SINGH",
          department: "CIVIL",
          email: "",
          password: "Homekraft@123",
        },
        {
          empID: "HK0608",
          employeeName: "ASHOK",
          department: "ELECTRICAL",
          email: "ashokrana6298@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0609",
          employeeName: "SHIKHA GAUTAM",
          department: "CRM",
          email: "shikha.gautam@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0610",
          employeeName: "BRAHAM PRAKASH SINGH",
          department: "CRM",
          email: "brahamprakash.singh@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0611",
          employeeName: "SHOBHIT BHATI",
          department: "CRM",
          email: "shobhit.bhati6@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0612",
          employeeName: "VAISHALI SHARMA",
          department: "MARKETING",
          email: "vaishali.sharma@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0613",
          employeeName: "BADRINATH TIWARI",
          department: "CIVIL",
          email: "badrinathtiwari6@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0614",
          employeeName: "NAVEEN KUMAR",
          department: "Supply Chain Management",
          email: "naveen.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0615",
          employeeName: "UMANG TIWARI",
          department: "CRM",
          email: "umang.tiwari@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0616",
          employeeName: "MONICA SADANA",
          department: "COMPLIANCE",
          email: "monica.sadana@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0618",
          employeeName: "SURAJ PANWAR",
          department: "PLANNING",
          email: "suraj.panwar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0619",
          employeeName: "PUSHPESH KUMAR SINGH",
          department: "BILLING",
          email: "er.pksingh0902@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0620",
          employeeName: "UTKARSH CHOUDHARY",
          department: "Supply Chain Management",
          email: "utkarsh.choudhary@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0621",
          employeeName: "JAYVEER",
          department: "Supply Chain Management",
          email: "jayveer@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0622",
          employeeName: "NIKITA RAWAT",
          department: "HUMAN RESOURCE",
          email: "nikita.rawat@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0624",
          employeeName: "MANAV GOYAL",
          department: "CONSTRUCTION",
          email: "manav.goyal@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0625",
          employeeName: "PADAM SINGH ",
          department: "CIVIL",
          email: "padamsingh6882@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0626",
          employeeName: "VRIJESH KUMAR SINGH",
          department: "CIVIL",
          email: "singhvrijesh2@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0627",
          employeeName: "SUMIT BHATI",
          department: "ADMIN",
          email: "sumitbhati249@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0628",
          employeeName: "HIMANSHU KUMAR",
          department: "ELECTRICAL",
          email: "royalhimanshuchauhan@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0629",
          employeeName: "JEEVAN SINGH BORA",
          department: "CIVIL",
          email: "borajeevan786@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0630",
          employeeName: "UMESH RAM",
          department: "ELECTRICAL",
          email: "umeshram35650@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0631",
          employeeName: "SANTOSH KUMAR",
          department: "ADMIN",
          email: "santosh.ch000123@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HK0632",
          employeeName: "SAURABH KUMAR",
          department: "CRM",
          email: "saurabh.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0633",
          employeeName: "JAGPRAVESH KUMAR",
          department: "CRM",
          email: "jagpravesh.kumar@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0634",
          employeeName: "RAVI KUMAR",
          department: "QUALITY",
          email: "ravi@homekraft.in",
          password: "Homekraft@123",
        },
        {
          empID: "HK0635",
          employeeName: "ANKIT SINGH",
          department: "BILLING",
          email: "princeksingh699@gmail.com",
          password: "Homekraft@123",
        },
        {
          empID: "HT0232",
          employeeName: "RAJINDER SINGH KOLHI",
          department: "E&M",
          email: "rajinder.kohli@atsgreens.com",
          password: "Homekraft@123",
        },
        {
          empID: "HT0233",
          employeeName: "BRIJESH KUMAR PANDEY",
          department: "MEP",
          email: "brijesh.pandey@atsgreens.com",
          password: "Homekraft@123",
        },
        {
          empID: "HT0234",
          employeeName: "SYED JAFAR RAZA",
          department: "LIAISON",
          email: "sjraza@atsgreens.com",
          password: "Homekraft@123",
        },
      ],
      skipDuplicates: true,
    });

    return res
      .status(201)
      .json({ data: createMany, message: "User registered" });
  } catch (error) {
    console.error("Signup error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred during user registration." });
  }
};

export const userSignup = async (req: Request, res: Response) => {
  const {
    empID,
    employeeName,
    designation,
    number,
    email,
    location,
    password,
  } = req.body;

  // Input validation (you can expand this section as per your validation logic)
  if (!empID || !email) {
    return res
      .status(400)
      .json({ message: "Employee ID and email are required." });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { empID },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already registered with this Employee ID." });
    }

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        empID,
        employeeName,
        designation,
        number,
        email,
        location,
        password,
      },
    });

    return res.status(201).json({
      message: "User successfully registered.",
      user: {
        id: newUser.id,
        empID: newUser.empID,
        employeeName: newUser.employeeName,
        designation: newUser.designation,
        number: newUser.number,
        email: newUser.email,
        location: newUser.location,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred during user registration." });
  }
};

export const sendGeneratePassMail = async (req: Request, res: Response) => {
  try {
    const { empID } = req.body;

    // Validate input
    if (!empID) {
      return res.status(400).json({ message: "Employee ID is required." });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { empID },
    });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Employee not found." });
    }

    // Generate token
    const token = generateToken({
      id: user.id,
      empID: user.empID,
      isAdmin: user.isAdmin,
    });

    // Send email with token
    await sendGeneratePasswordMail({
      // @ts-ignore
      email: user.email,
      token,
    });

    return res.status(200).json({ message: "Check your email" });
  } catch (error) {
    console.error("Error sending password reset email:", error);
    return res.status(500).json({
      message: "Error | Try Again After Sometime",
    });
  }
};

export const userGeneratePassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    // Verify token
    let verifyToken;
    try {
      // @ts-ignore
      verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.status(400).json({ message: "Unauthorized" });
    }

    // Check if token verification failed
    if (!verifyToken) {
      return res.status(400).json({ message: "Unauthorized" });
    }
    // const hashedPassword = await bcrypt.hash(password, saltRounds);
    const generatePassword = await prisma.user.update({
      where: {
        // @ts-ignore
        empID: verifyToken.empID,
      },
      data: {
        password: password,
        isVerified: true,
      },
    });

    return res
      .status(200)
      .json({ data: generatePassword, message: "Password Generated!" });
  } catch (error) {
    console.error("Error generating password:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while generating the password." });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { empID, password } = req.body;

    // Validate input
    if (!empID || !password) {
      return res
        .status(400)
        .json({ message: "Employee ID and password are required." });
    }

    // Find user by empID
    const user = await prisma.user.findUnique({
      where: { empID },
    });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Compare passwords
    //   @ts-ignore
    // const matchPassword = await bcrypt.compare(password, user.password);
    const matchPassword = password === user.password;
    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = generateAccessToken({
      id: user.id,
      empID: user.empID,
      isAdmin: user.isAdmin,
    });
    const options = {
      sameSite: true,
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    };
    res.cookie(`Homekraft`, accessToken, options);

    // Password is correct, return user data
    return res.status(200).json({ data: user, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ message: "Error | Try again after sometime" });
  }
};

export const userProfile = async (req: Request, res: Response) => {
  try {
    const decodedToken = req.userToken;
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.id },
      select: {
        id: true,
        empID: true,
        employeeName: true,
        designation: true,
        number: true,
        email: true,
        location: true,
        isVerified: true,
        isAdmin: true,
        isPasswordChange: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ data: user, message: "User fetched" });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const sendForgetMail = async (req: Request, res: Response) => {};

export const userForgetPassword = async (req: Request, res: Response) => {};

export const userUpdatePassword = async (req: Request, res: Response) => {
  try {
    const decodedToken = req.userToken;

    const { oldPassword, newPassword } = req.body;
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.id },
    });
    // If user doesn't exist
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify old password
    // @ts-ignore
    const isPasswordValid = oldPassword === user.password;
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Old password is incorrect" });
    }

    // Hash the new password
    // const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update admin's password
    await prisma.user.update({
      where: { id: decodedToken.id },
      data: { password: newPassword, isPasswordChange: true },
    });

    // Clear the "campus" cookie
    res.clearCookie("Homekraft");
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing in password:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const decodedToken = req.userToken;
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.id },
    });
    // If user doesn't exist
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify old password
    // @ts-ignore
    const isPasswordValid = oldPassword === user.password;
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Old password is incorrect" });
    }

    // Hash the new password
    // const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update admin's password
    await prisma.user.update({
      where: { id: decodedToken.id },
      data: { password: newPassword, isPasswordChange: true },
    });

    // Clear the "campus" cookie
    res.clearCookie("Homekraft");
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing in password:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const userLogout = async (req: Request, res: Response) => {
  try {
    // Clear the "campus" cookie
    res.clearCookie("Homekraft");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// admin controllers

export const makeAdmin = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const makeAdmin = await prisma.user.update({
      where: { id: userId },
      data: {
        isAdmin: true,
      },
    });

    return res
      .status(200)
      .json({ message: `Now ${makeAdmin.employeeName} is admin` });
  } catch (error) {
    console.error("Making admin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        empID: true,
        employeeName: true,
        designation: true,
        number: true,
        email: true,
        location: true,
        isAdmin: true,
        createdAt: true,
        watchingHistory: {
          select: {
            id: true,
            userId: true,
            videoId: true,
            watchedAt: true,
            watchDuration: true,
            isCompleted: true,
          },
        },
        assessments: {
          select: {
            id: true,
            name: true,
            duration: true,
            score: true,
            format: true,
            videoId: true,
            createdAt: true,
          },
        },
      },
    });

    return res.status(200).json({ data: users, message: "Users fetched" });
  } catch (error) {
    console.error("Fetching users:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUsers = async (req: Request, res: Response) => {
  try {
    const usersWithAssessment = await prisma.user.findMany({
      where: {
        assessments: { some: {} }, // Users with at least one assessment
      },
    });

    // Delete Assessment entries for these users
    if (usersWithAssessment.length > 0) {
      await prisma.assessment.deleteMany({
        where: {
          userId: { in: usersWithAssessment.map((user) => user.id) },
        },
      });
    }
    const usersWithHistory = await prisma.user.findMany({
      where: {
        watchingHistory: { some: {} }, // Users with at least one entry
      },
    });
    if (usersWithHistory.length > 0) {
      await prisma.watchingHistory.deleteMany({
        where: {
          userId: { in: usersWithHistory.map((user) => user.id) },
        },
      });
    }
    await prisma.user.deleteMany({});

    return res.status(200).json({ message: "Users deleted" });
  } catch (error) {
    console.error("Fetching users:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.status(200).json({ data: user, message: "User fetched" });
  } catch (error) {
    console.error("Fetching User:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Deleting User:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
