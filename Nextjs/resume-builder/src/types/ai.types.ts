export interface GenerateSummary{
    expirienceLevel:string;
    skills: string[];
    jobTitle:string;

}

export interface GenerateSkills{
    expirienceLevel:string;
    jobTitle:string;
}

export interface GenerateProjectDescription {
    projectName: string;
    skills?: string[];
    descriptionContext: string;
}

export interface GenerateExperienceDescription {
    jobTitle: string;
    companyName: string;
    skills?: string[];
    descriptionContext: string;
}
