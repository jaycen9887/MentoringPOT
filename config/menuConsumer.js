module.exports = {
    groupId: 'Menu-Group',
    autoCommit: true,
    autoCommitIntervalMs: 5000,
    fetchMaxWaitMs: 100,
    fetchMinBytes: 1,
    fetchMaxBytes: 1024 * 1024,
    fromOffset: "latest",
    encoding: 'utf8',
    keyEncoding: 'utf8'
}

//Encoding and KeyEncoding is for if set to 'buffer' valuse will be returned as raw buffer types.