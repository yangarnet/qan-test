import React, { Component } from "react";
import classnames from "classnames";
import EnhanceSearchInput from "./EnhanceSearchInput";

class SearchInput extends Component {
    render() {
        const { data, isvalid, onChange } = this.props;

        return (
            <div className="col-sm-4">
                <input
                    type="text"
                    className={classnames(
                        "input-search form-control form-control-lg",
                        {
                            "is-invalid": isvalid === "NO"
                        }
                    )}
                    placeholder="search for more flights.."
                    title="Type in a city name"
                    onChange={onChange}
                    data={data}
                    isvalid={isvalid}
                />
                {isvalid === "NO" && (
                    <div className="invalid-feedback">
                        please input a valid city name
                    </div>
                )}
            </div>
        );
    }
}

export default EnhanceSearchInput(SearchInput);
