import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";

const Projects = () => {
  const { loading, error, data} = useQuery(GET_PROJECTS)
  return (
    <>
        {loading && <Spinner />}
        {error && <p>Something Went Wrong</p>}
        {data.projects.length > 0 ? (
            <div className="row">
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        ): (<p>No projects</p>)}
    </>
  )
}

export default Projects