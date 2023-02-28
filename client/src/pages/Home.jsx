import { AddClientModal, AddProjectModal, Clients, Projects } from "../components"

const Home = () => {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
    </div>
        <Projects />
        <hr />
        <Clients />
    </>
  )
}

export default Home