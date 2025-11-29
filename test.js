/**
 * Test file for Notepad application
 * 
 * This file contains basic tests to verify the application setup
 * and test the pull request workflow.
 */

const path = require('path');
const fs = require('fs');

// Test 1: Check that required files exist
function testRequiredFilesExist() {
    const requiredFiles = ['index.js', 'package.json'];
    const missingFiles = [];
    
    requiredFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (!fs.existsSync(filePath)) {
            missingFiles.push(file);
        }
    });
    
    if (missingFiles.length === 0) {
        console.log('✅ Test 1 PASSED: All required files exist');
        return true;
    } else {
        console.log(`❌ Test 1 FAILED: Missing files: ${missingFiles.join(', ')}`);
        return false;
    }
}

// Test 2: Check that views directory exists with EJS templates
function testViewsDirectoryExists() {
    const viewsPath = path.join(__dirname, 'views');
    if (fs.existsSync(viewsPath) && fs.statSync(viewsPath).isDirectory()) {
        const files = fs.readdirSync(viewsPath);
        const ejsFiles = files.filter(f => f.endsWith('.ejs'));
        if (ejsFiles.length > 0) {
            console.log(`✅ Test 2 PASSED: Views directory exists with ${ejsFiles.length} EJS template(s)`);
            return true;
        }
    }
    console.log('❌ Test 2 FAILED: Views directory missing or empty');
    return false;
}

// Test 3: Check that files directory exists
function testFilesDirectoryExists() {
    const filesPath = path.join(__dirname, 'files');
    if (fs.existsSync(filesPath) && fs.statSync(filesPath).isDirectory()) {
        console.log('✅ Test 3 PASSED: Files directory exists');
        return true;
    }
    console.log('❌ Test 3 FAILED: Files directory missing');
    return false;
}

// Test 4: Check package.json has required dependencies
function testDependencies() {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const requiredDeps = ['express', 'ejs'];
    const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
    
    if (missingDeps.length === 0) {
        console.log('✅ Test 4 PASSED: All required dependencies present');
        return true;
    } else {
        console.log(`❌ Test 4 FAILED: Missing dependencies: ${missingDeps.join(', ')}`);
        return false;
    }
}

// Run all tests
function runTests() {
    console.log('\n🧪 Running Notepad Application Tests\n');
    console.log('='.repeat(50));
    
    const results = [
        testRequiredFilesExist(),
        testViewsDirectoryExists(),
        testFilesDirectoryExists(),
        testDependencies()
    ];
    
    console.log('='.repeat(50));
    
    const passed = results.filter(r => r).length;
    const total = results.length;
    
    console.log(`\n📊 Results: ${passed}/${total} tests passed\n`);
    
    if (passed === total) {
        console.log('🎉 All tests passed successfully!\n');
        process.exit(0);
    } else {
        console.log('⚠️  Some tests failed.\n');
        process.exit(1);
    }
}

// Execute tests
runTests();
