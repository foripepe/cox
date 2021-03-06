var NodeGit = require('nodegit');
var _ = require('lodash');

var options = {
    ignoreCertErrors: 1,
    remoteCallbacks: {
        credentials: function(url, userName) {
            return NodeGit.Cred.sshKeyFromAgent(userName);
        }
    }
};

module.exports = {
    get: function(){
        return _.cloneDeep(options);
    }
};
