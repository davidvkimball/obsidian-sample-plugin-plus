#!/usr/bin/env node

/**
 * ESLint wrapper that adds helpful success messages
 */

import { spawn } from 'child_process';
import process from 'process';

const args = process.argv.slice(2);
const hasFix = args.includes('--fix');

// Run ESLint
const eslint = spawn('npx', ['eslint', '.', ...args], {
	stdio: 'inherit',
	shell: true
});

eslint.on('close', (code) => {
	// Only show success message if exit code is exactly 0 (no errors or warnings)
	if (code === 0) {
		const message = hasFix 
			? '\n✓ Linting complete! All issues fixed automatically.\n'
			: '\n✓ Linting passed! No issues found.\n';
		console.log(message);
		process.exit(0);
	} else {
		// ESLint already printed errors/warnings, exit with the code
		// Don't show any success message
		process.exit(code || 1);
	}
});

eslint.on('error', (error) => {
	console.error('Error running ESLint:', error);
	process.exit(1);
});
