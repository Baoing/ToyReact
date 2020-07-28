import { ToyReact,Component } from './ToyReact';

class Mycomponent extends Component{
  render(){
    return <div>
      <span>hello</span>word
      <div>
        {true}
        {this.children}
      </div>
      </div>
  }
}

let app = <Mycomponent name="my">
  <div>123</div>
</Mycomponent>

ToyReact.render(
  app,
  document.body
);