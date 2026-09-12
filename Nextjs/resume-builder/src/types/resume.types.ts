import { Types } from "mongoose";

export interface IPersonalInformation{
    fullname:string;
    email:string;
    mobile:string;
    location:string;
    github:string;
    linkedIn:string;
    portfolio:string;
}

export interface IWrokExprience{
   comapany:string;
   position:string;
   startDate:string;
   endDate:string;
   description:string;
}


export interface Iprojects{
    title:string;
    description:string;
    githubUrl:string;
    liveUrl:string
    techStack:string[];
}


export interface IEducation{
  institute:string;
  degree:string;
  startDate:string;
  endDate:string
}

export interface IResume{
  _id?:string;
  title:string;
  user_Id:Types.ObjectId;
  personalInformation:IPersonalInformation;
  summary:string;
  skills:string[];
  workExperience?:IWrokExprience[];
  projects:Iprojects[];
  education:IEducation[];
  certifications?:string[];
  createdAt?:Date;
  updatedAt?:Date
}