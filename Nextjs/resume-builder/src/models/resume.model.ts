import { IResume } from "@/types/resume.types";
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema<IResume>({
   user_Id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
   },

   title:{
    type:String,
    default:''
   },

   summary:{
    type:String,
    default:''
   },

   personalInformation:{
    type:{
        fullname:String,
        email:String,
        mobile:String,
        location:String,
        github:String,
        linkedIn:String,
        portfolio:String,
    },
    default:{
        fullname:'',
        email:'',
        mobile:'',
        location:'',
        github:'',
        linkedIn:'',
        portfolio:''
    }
   },

   workExperience:{
    type:[
        {
            company:String,
            position:String,
            startDate:Date,
            endDate:Date,
            description:String,
        }
    ],
    default:[]
   },


   projects:[
    {
        title:String,
        description:String,
        githubUrl:String,
        liveUrl:String,
        techStack:[String],
    }
   ],
   
   skills:{
    type:[String],
    default:[]
   },
   

   education:[
    {
        institute:String,
        degree:String,
        startDate:Date,
        endDate:Date,
    }
   ],
   certifications:[String],

   
},{
    timestamps:true
})

const ResumeModel = mongoose.models.Resume || mongoose.model("Resume",resumeSchema);

export default ResumeModel;