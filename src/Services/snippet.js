class Feed extends React.Component {
    constructor(props) {
      super(props)
      
      this.handleShowMore = this.handleShowMore.bind(this)
      
      this.state = {
        items: ['Item A', 'Item B', 'Item C', 'Item D'],
        showItems: 2
      }
    }
    
    handleShowMore() {
      this.setState({
        showItems: 
          this.state.showItems >= this.state.items.length ?
            this.state.showItems : this.state.showItems + 1
      })
    }
    
    render() {
      const items = this.state.items.slice(0, this.state.showItems).map(
        (item) => <div>{item}</div>
      )
      
      return (
        <div>
          {items}
          <button onClick={this.handleShowMore}>
            Show more!
          </button>
        </div>
      )
    }
  }
    
  ReactDOM.render(
    <Feed />,
    document.getElementById('root')
  )
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
  
  <div id='root'></div>
   Run code snippetExpand snippet
  shareim