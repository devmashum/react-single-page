

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="bg-blue-200 p-5 rounded-xl" >
            <img src={logo} alt="" />
            <h2 className="mt-5">{company_name}</h2>

            <div className="flex gap-5 ">
                <h2>{job_title}</h2>
                <h2>{remote_or_onsite}</h2>
            </div>
            <div className="flex gap-5">
                <h2>{location}</h2>
                <h2>{salary}</h2>
            </div>

        </div>
    );
};

export default Job;