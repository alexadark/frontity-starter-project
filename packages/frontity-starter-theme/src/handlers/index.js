export const projectsHandler = {
  name: "project",
  priority: 10,
  pattern: "/projects/:slug",
  func: async ({ route, params, state, libraries }) => {
    //1-get projects
    const response = await libraries.source.api.get({
      endpoint: "project",
      params: { slug: params.slug }
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
