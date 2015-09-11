import path from 'path';

import testJob from './../utils/test-job';
import testBuild from './../utils/test-build';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const CURRENT_TEST_DIR = path.basename(__dirname);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const tests = (testFunction, jobData) => {

    [1, 2, 3].forEach((i) => {
        testJob(testFunction, i, jobData, {
            assignJobNumber: 4,
            successful: false,
            successfulBuild: true,
            unsignedTasks: [1, 2, 3, 4]
        });
    });

    testJob(testFunction, 4, jobData, {
        assignJobNumber: 4,
        assignedTasks: [1, 3, 4],
        successful: true,
        successfulBuild: true,
        unsignedTasks: [2]
    });

    [5, 6].forEach((i) => {
        testJob(testFunction, i, jobData, {
            assignJobNumber: 4,
            successful: true,
            successfulBuild: true,
            unsignedTasks: [1, 2, 3, 4]
        });
    });

};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default (tap) => {
    testBuild(tap, CURRENT_TEST_DIR, tests);
};