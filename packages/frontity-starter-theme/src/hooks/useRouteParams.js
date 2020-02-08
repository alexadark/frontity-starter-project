const useRouteParams = (libraries, path, page, query) =>
  libraries.source.stringify({
    path,
    page,
    query
  });
export default useRouteParams;
