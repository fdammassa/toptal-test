import { Meteor } from 'meteor/meteor';
import '../imports/api/sdocs.js';

import { Sdocs } from '../imports/api/sdocs.js';

Meteor.startup(() => {
  if (Sdocs.find().count() === 0) {
    var sdoc = {
      field1Label: 'Field 1 Label',
      field1Value: '',
      field2Label: 'Field 2 Label',
      field2Value: '',
      field3Label: 'Field 3 Label',
      field3Value: '',
    }
    Sdocs.insert(sdoc);
  }
});
