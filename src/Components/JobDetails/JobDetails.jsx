import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied')
    }

    return (
        <div className="m-20">

            <div className=" grid md:grid-cols-4 gap-5">
                <div className="border md:col-span-3">
                    <h2 className=" text-lg "><span className="font-bold">Job Description:</span> {job.job_description}</h2>
                    <br />
                    <p><span className="font-bold">Job Responsibility:</span>  {job.job_responsibility}</p>
                    <br />
                    <h2><span className="font-bold">Educational Requirements:</span> {job.educational_requirements} </h2> <br />
                    <h2><span className="font-bold">Experiences:</span></h2>
                    <p>{job.experiences}</p>
                </div>
                <div className="border bg-blue-200 p-3">
                    <h2 className="text-xl font-extrabold">Job Details</h2>
                    <hr />

                    <p>Salary: {job.salary}</p>
                    <p>Job Title: {job.job_title}</p>

                    <h2 className="text-xl font-extrabold">Contact Information</h2>
                    <hr />
                    <p>Phone : {job.contact_information.phone} </p>
                    <p>Email : {job.contact_information.email}</p>
                    <p>Address : {job.contact_information.address}</p>


                </div>

            </div>
            <button onClick={handleApplyJob} className="btn btn-primary w-full mt-5">Apply Now</button>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;