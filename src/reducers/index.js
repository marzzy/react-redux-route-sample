export default (
  state = { content: [], isLoading: true, errors: null },
  action 
  ) => {
  if (action.type == 'INIT_FETCH') {
    fetch('https://api.evand.com/events')
      .then(res => res.json())
      .then((data) => {
        let mydata = [];
        mydata = data.data.map(item =>(
          {
            id: item.id,
            slug: item.slug,
            name: item.name,
            address: item.address,
            cover: item.cover,
            organization: item.organization.name,
          }
        )
      );
        return Object.assign ({},state,{
          content: mydata, isLoading: false
        });
      })
      .catch(error => Object.assign({},state,{errors: `${error}`}))
  }
}

// export default initData
