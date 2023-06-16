import {gql, useQuery} from "@apollo/client";

const GET_ALL_JOBS = gql`
  query getAllJobs {
    getAllJobs {
        id
        title
        skills
    }
  }
`;
export const AllJobs = () => {
    const { loading, error, data } = useQuery(GET_ALL_JOBS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log("this is data:", data);

    return (
        <table className="table-container">
            <thead>
            <tr>
                <th className="table-header">Job Title</th>
                <th className="table-header"> Number of Jobs Queried</th>
                <th className="table-header">Top 5 Skills</th>
                <th className="table-header">Average Salary</th>
            </tr>
            </thead>
            <tbody>
            {data.getAllJobs.map((job) => (
                <tr key={job.id}>
                    <td className="table-body">{job.title}</td>
                    <td className="table-body">{/* Number of Jobs Queried */}</td>
                    <td className="table-body">{/* Top 5 Skills */}</td>
                    <td className="table-body">{/* Average Salary */}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};