import {gql, useQuery} from "@apollo/client";

const FIND_BY_ID = gql`
  query jobById ($id: ID!){
    jobById (id: $id){
        id
        title
        skills
    }
  }
`;
export const Job = ({id}) => {
    const { loading, error, data } = useQuery(FIND_BY_ID, {variables: {id}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log("this is one job data:", data);

    const job = data.jobById;

    return (
        <div>
            <h3>{job.id}</h3>
            <h3>{job.title}</h3>
            <p>{job.skills}</p>
        </div>
    );
};