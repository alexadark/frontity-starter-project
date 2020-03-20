export const projectsHandler = {
  name: "about",
  priority: 10,
  pattern: "/about",
  func: async ({ route, state, libraries }) => {
    // Fetch the about page.
    const aboutResponse = await libraries.source.api.get({
      endpoint: "pages",
      params: { slug: "about", _embed: true }
    });

    // Populate the state with the response.
    const [aboutData] = await libraries.source.populate({
      response: aboutResponse,
      state
    });

    // Extract the project IDs.
    const aboutPage = state.source.page[aboutData.id];
    const projectIds = aboutPage.acf.flexible_layouts
      .find(layout => layout.acf_fc_layout === "projects_block")
      .projects.map(project => project.ID);

    // Fetch the projects with those ids.
    const projectsResponse = await libraries.source.api.get({
      endpoint: "projects",
      params: { includes: projectIds.join(",") }
    });

    // Populate the state with those projects.
    await libraries.source.populate({
      response: projectsResponse,
      state
    });

    // Populate data with info about /about.
    Object.assign(state.source.data[route], {
      id: aboutData.id,
      type: aboutData.type,
      isAboutPage: true,
      isPostType: true,
      projectIds
    });
  }
};
