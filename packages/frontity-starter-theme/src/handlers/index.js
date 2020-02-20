export const projectsHandler = {
  name: "projects",
  priority: 10,
  pattern: "/projects/",
  func: async ({ route, params, state, libraries }) => {
    //1-get projects
    const response = await libraries.source.api.get({
      endpoint: "projects"
      // params: { slug: params.slug }
    });
    //2- add project to state
    const [project] = await libraries.source.populate({ response, state });

    //3- add route to data
    Object.assign(state.source.data[route], {
      id: project.id,
      type: project.type,
      isPostType: true,
      isProject: true
    });
  }
};
