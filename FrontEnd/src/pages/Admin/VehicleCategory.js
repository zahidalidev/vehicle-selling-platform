import React, { Component } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify"

import colors from '../../config/colors';
import "./Admin.css"
import { postCategory, getCategories, deleteCategory } from "../../http/api"

class VehicleCategory extends Component {
    state = {
        categories: [],
        category: ''
    }

    componentDidMount = async () => {
        try {
            const { data: categories } = await getCategories();
            this.setState({ categories })
        } catch (error) {
            toast.error(error)
        }
    }

    handleAddCategory = async () => {
        let category = this.state.category
        const body = { title: category.trim() }

        try {
            const { data } = await postCategory(body)
            this.setState({ categories: [...this.state.categories, data] })

            toast.success("Category added")
        } catch (error) {
            toast.error('Category not added! ' + error.message)
        }
    }

    handleDelCategory = async (category) => {
        const originalCategories = this.state.categories;
        let categories = [...this.state.categories];

        const index = categories.indexOf(category);
        categories.splice(index, 1)
        this.setState({ categories })

        try {
            await deleteCategory(category._id)
            toast.success("Category deleted")
        } catch (error) {
            this.setState({ categories: originalCategories })
            toast.error('Category not deleted! ' + error.message)
        }

    }

    render() {
        const { categories } = this.state;

        return (
            <div className="row userBox2">
                <div className="col-md-12"  >
                    <div className="row" style={{ justifyContent: "center", alignContent: "center" }} >
                        <h1> Vehicle Categories</h1>
                    </div>
                </div>

                <div className="col-md-6" style={{ marginTop: 50, marginBottom: 30, marginRight: 100 }}>
                    <Card className="row" style={{ paddingTop: 50, paddingBottom: 30 }} >
                        <div className="col-md-12" >
                            <TextField
                                className="loginTextFeild"
                                label="Add category"
                                variant="outlined"
                                size="small"
                                onChange={(e) => this.setState({ category: e.target.value })}
                            />
                        </div>
                        <div className="col-md-3" style={{ justifyItems: "center" }} >
                            <Button className="loginButton" onClick={this.handleAddCategory} style={{ backgroundColor: colors.primary }} variant="contained" color="primary">
                                Add
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="col-md-4" style={{ marginTop: 50, marginBottom: 30 }}>
                    {categories.map((category, i) =>
                        <Card className="row" style={{ marginBottom: 10, paddingLeft: 40 }} >
                            <div className="col-md-7" style={{ marginTop: 20, marginBottom: 20, whiteSpace: "nowrap" }}>
                                <h6>{category.title}</h6>
                            </div>
                            <div className="col-md-5" style={{ marginTop: 20, marginBottom: 20, whiteSpace: "nowrap" }}>
                                <DeleteIcon onClick={() => this.handleDelCategory(category)} style={{ color: "red", cursor: "pointer" }} />
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        );
    }
}

export default VehicleCategory;