import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)
  useEffect(() => {}, [data])
  
  return (
    <>
        {loading && <Spinner />}
        {error && <p>Something Went Wrong</p>}
        {data?.projects && (
            <div className="row">
                {data.projects?.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>)
        }
    </>
  )
}

export default Projects