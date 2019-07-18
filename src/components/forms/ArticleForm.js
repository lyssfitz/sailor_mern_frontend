import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError, reset } from "redux-form";
import { fetchArticles, closeArticleModal } from "./../../actions";
import LocalAPI from "./../../apis/local";
import { Form, Icon, Button, Input, Modal } from "antd";
import MakeField from "./fields/MakeField";
import history from "./../../history"

const AInput = MakeField(Input);

class ArticleForm extends Component {
  state = {
    formError: null,
    loading: false
  }

  onFieldClick = () => {
    this.setState({formError: null});
  }

  onFormSubmit = async (formValues, dispatch) => {
    const { url } = formValues;
    this.setState({ loading: true });

    await LocalAPI.post("/article/new", { url })
      .then(response => {
        if (response.data.error === 11000) {
          this.setState({ loading: false });
          dispatch(reset("article"))
          throw new SubmissionError("Article already added");
        } else {
          this.props.closeArticleModal();
          dispatch(reset("article"))
          this.props.fetchArticles();
          this.setState({ loading: false });
          history.push("/feed");
        }
        
      })
      .catch(error => {
        this.setState({ formError: error });
        history.push("/feed");
      });
  };

  render() {
    const { handleSubmit, visible } = this.props;
    const { formError, loading } = this.state;
    return ( 
      <Modal
      visible={visible}
      width="300px"
      title="Add an Article"
      onCancel={this.props.closeArticleModal}
      footer={null}
    >
        { formError && formError.errors }
        <Form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field onClick={this.onFieldClick} name="url" placeholder="Article URL" component={AInput} type="url" prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />} />
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Article
          </Button>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      visible: state.articleModal.visible
  };
}

const WrappedArticleForm = reduxForm({
  form: "article",
  validate: formValues => {
    const errors = {};

    if (!formValues.url) {
      errors.url = "Article URL is required";
    }

    return errors;
  }
})(ArticleForm);


export default connect(
  mapStateToProps,
  { closeArticleModal, fetchArticles }
)(WrappedArticleForm);