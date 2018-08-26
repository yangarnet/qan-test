import React, { Component } from "react";

const EnhanceSearchInput = WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: "",
                isvalid: "YES"
            };
            this.validate = this.validate.bind(this);
        }

        validate(e) {
            e.preventDefault();
            const regex = new RegExp("^[a-zA-Z ]+$", "i");

            console.log(
                `match?:${regex.test(e.target.value)}`,
                regex.test(e.target.value) ? "YES" : "NO"
            );
            this.setState({
                data: e.target.value,
                isvalid: regex.test(e.target.value) ? "YES" : "NO"
            });
        }

        render() {
            return (
                <WrappedComponent
                    data={this.state.data}
                    isvalid={this.state.isvalid}
                    onChange={this.validate}
                    {...this.props}
                />
            );
        }
    };
};

export default EnhanceSearchInput;
