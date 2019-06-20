import React, { Component } from "react";
import MarkDown from "react-markdown";
import "../assets/editer.css";

class MacDownEditer extends Component {
  //   state = {
  //     inputValue: ""
  //   };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { inputValue: "" };
  }
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const inputValue = this.state.inputValue;
    return (
      <div>
        <textarea
          className="mac-show col-sm-6"
          rows="8"
          //   cols="0"
          value={inputValue}
          onChange={this.handleChange}
        />
        <MarkDown source={inputValue} className="mac-show col-sm-6" />
      </div>
    );
  }
  //   updateInputValue = function(evt) {
  //     console.log(evt);
  //   };
}

// const MDEditor = () => (
//     <Card small className="mb-3">
//       <CardBody>
//         <Form className="add-new-post">
//           <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
//           <ReactQuill className="add-new-post__editor mb-1" />
//         </Form>

//         <input value={this.state.inputValue} onChange={this.updateInputValue}/>

//       </CardBody>

//       <MarkDown source="# Hello" />
//     </Card>
//   );

export default MacDownEditer;
