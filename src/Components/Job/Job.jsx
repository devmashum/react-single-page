

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="bg-blue-100 p-5 rounded-xl" >
            <img src={logo} alt="" />
            <h2 className="mt-5 text-xl font-bold">{company_name}</h2>

            <div className="flex gap-5 text-lg ">
                <p className=" text-black font-bold bg-gray-100 p-1 rounded-xl ">{job_title}</p>
                <p className=" text-black font-bold bg-gray-100 p-1 rounded-xl   ">{remote_or_onsite}</p>

            </div>
            <div className="flex gap-5 text-lg">
                <h2>{location}</h2>
                <h2>{salary}</h2>
            </div>
            <button className=" btn"> Details</button>

        </div>
    );
};

export default Job;