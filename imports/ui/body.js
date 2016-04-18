import { Template } from 'meteor/templating';

import { Sdocs } from '../api/sdocs.js';

import './body.html';

Template.docForm.helpers({
  sdoc() {
    return Sdocs.findOne();
  },
});

Template.docForm.events({
  'submit .edit-document'(event) {
    event.preventDefault();

    var docId = this._id;
    var docProperties = {
      'field1Value': $(event.target).find('[name=field1Value]').val(),
      'field2Value': $(event.target).find('[name=field2Value]').val(),
      'field3Value': $(event.target).find('[name=field3Value]').val()
    };

    Sdocs.update(docId, {
      $set: docProperties,
    }, function(error){
      if(error){
        alert(error.reason);
      } else {
        alert('Doc updated!');
      }
    });
  },
});
