function(doc) {
    if(doc.doc_type == 'Lot' && !doc.mode) {
        var fields=['lotID', 'dateModified'], data={};
        for (var i in fields) {
            if (doc[fields[i]]) {
                data[fields[i]] = doc[fields[i]]
            }
        }
        emit(doc._local_seq, data);
    }
}
