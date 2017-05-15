import * as _ from 'lodash';

export class AtomWrapper {

    createFile(entities) {
        var entries = _.map(filtered, e => createEntries(e))
        return createHeader() +
            + _.join(entries, "\n") +
            createFooter();
    }

    createHeader() {
        return 'header'
    }

    createEntries(entity) {
        return '<entry></entry>'
    }

    createFooter() {
        return 'footer'
    }

}


