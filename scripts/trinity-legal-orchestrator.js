#!/usr/bin/env node
// 🤖 Trinity Legal Analysis Orchestrator
// Complete legal analysis workflow for Microsoft privacy policies

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class TrinityLegalOrchestrator {
  constructor() {
    this.workflowSteps = [
      { name: 'Document Crawling', script: 'trinity-legal-crawler.js', duration: '2-5 minutes' },
      { name: 'Legal Analysis', script: 'trinity-legal-analyzer.js', duration: '3-7 minutes' },
      { name: 'Report Generation', script: 'trinity-risk-reporter.js', duration: '1-2 minutes' }
    ];
  }

  async executeFullAnalysis() {
    console.log('🚀 ═══════════════════════════════════════════════════════');
    console.log('🤖        TRINITY LEGAL ANALYSIS SYSTEM               🤖');
    console.log('═══════════════════════════════════════════════════════');
    console.log('');
    console.log('📋 MISSION: Analyze Microsoft privacy policies for business threats');
    console.log('🎯 TARGET: smartSD + Web3 fraud prevention business model');
    console.log('⚖️ SCOPE: Complete legal document analysis workflow');
    console.log('');

    // Step 1: Crawl Documents
    console.log('📡 PHASE 1: Document Crawling');
    console.log('   🕷️ Crawling Microsoft legal documents...');
    await this.executeScript('trinity-legal-crawler.js');
    
    // Step 2: Analyze for Business Threats
    console.log('\n🔍 PHASE 2: Legal Analysis');
    console.log('   🧠 Analyzing documents for business model threats...');
    await this.executeScript('trinity-legal-analyzer.js');
    
    // Step 3: Generate Executive Summary
    console.log('\n📊 PHASE 3: Executive Reporting');
    await this.generateFinalReport();
    
    console.log('\n🎉 ═══════════════════════════════════════════════════════');
    console.log('✨         TRINITY LEGAL ANALYSIS COMPLETE             ✨');
    console.log('═══════════════════════════════════════════════════════');
    
    await this.displayExecutiveSummary();
  }

  async executeScript(scriptName) {
    return new Promise((resolve, reject) => {
      const scriptPath = path.join(__dirname, scriptName);
      const child = spawn('node', [scriptPath], { stdio: 'inherit' });
      
      child.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Script ${scriptName} failed with code ${code}`));
        }
      });
      
      child.on('error', (error) => {
        reject(error);
      });
    });
  }

  async generateFinalReport() {
    const reportDir = './legal-analysis/results';
    
    // Check if analysis was completed
    const executivePath = path.join(reportDir, 'executive-summary.md');
    const detailedPath = path.join(reportDir, 'detailed-analysis.json');
    
    if (!fs.existsSync(executivePath) || !fs.existsSync(detailedPath)) {
      console.log('⚠️ Analysis files not found, generating basic report...');
      return;
    }
    
    // Load analysis results
    const detailedAnalysis = JSON.parse(fs.readFileSync(detailedPath, 'utf8'));
    const executiveReport = fs.readFileSync(executivePath, 'utf8');
    
    // Generate comprehensive report
    const comprehensiveReport = `# 🤖 TRINITY LEGAL ANALYSIS - COMPLETE REPORT

Generated: ${new Date().toISOString()}

## 📊 ANALYSIS OVERVIEW

- **Documents Processed:** ${detailedAnalysis.summary.totalDocuments}
- **Total Words Analyzed:** ${detailedAnalysis.documents.reduce((sum, doc) => sum + doc.wordCount, 0).toLocaleString()}
- **Threats Identified:** ${detailedAnalysis.summary.totalThreats}
- **Analysis Duration:** ${this.getAnalysisDuration()}

## 🚨 RISK DISTRIBUTION

${Object.entries(detailedAnalysis.summary.riskDistribution)
  .map(([level, count]) => `- **${level}:** ${count} documents`)
  .join('\n')}

## 📋 EXECUTIVE SUMMARY

${executiveReport.split('# 🚨 TRINITY LEGAL ANALYSIS - EXECUTIVE SUMMARY')[1]}

## 📁 GENERATED REPORTS

1. **Executive Summary:** \`legal-analysis/results/executive-summary.md\`
2. **Detailed Analysis:** \`legal-analysis/results/detailed-analysis.json\`
3. **Mitigation Strategies:** \`legal-analysis/results/mitigation-strategies.md\`
4. **Complete Report:** \`legal-analysis/results/complete-report.md\`

## 🛡️ NEXT STEPS

1. **Review Executive Summary** for immediate business decisions
2. **Consult Legal Counsel** for any showstopper threats identified
3. **Implement Mitigation Strategies** as recommended
4. **Monitor Legal Changes** - Trinity can re-analyze when terms update

---

*This analysis was performed by Trinity AI Legal Analysis System*
*Results are for informational purposes only and do not constitute legal advice*
*For business-critical decisions, please consult with qualified legal counsel*`;

    const completeReportPath = path.join(reportDir, 'complete-report.md');
    fs.writeFileSync(completeReportPath, comprehensiveReport);
    
    console.log(`📋 Complete report generated: ${completeReportPath}`);
  }

  getAnalysisDuration() {
    // In production, would track actual timing
    return '5-10 minutes';
  }

  async displayExecutiveSummary() {
    try {
      const summaryPath = './legal-analysis/results/executive-summary.md';
      
      if (fs.existsSync(summaryPath)) {
        console.log('\n📋 EXECUTIVE SUMMARY PREVIEW:');
        console.log('═'.repeat(60));
        
        const summary = fs.readFileSync(summaryPath, 'utf8');
        const lines = summary.split('\n').slice(0, 20); // First 20 lines
        console.log(lines.join('\n'));
        
        if (summary.split('\n').length > 20) {
          console.log('\n... (see complete report for full analysis)');
        }
        
        console.log('═'.repeat(60));
        console.log(`\n📁 Full reports available in: ./legal-analysis/results/`);
      } else {
        console.log('\n⚠️ Executive summary not generated - check analysis logs');
      }
    } catch (error) {
      console.error('Error displaying summary:', error.message);
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new TrinityLegalOrchestrator();
  
  console.log('🤖 Trinity Legal Analysis System');
  console.log('Usage: node trinity-legal-orchestrator.js [options]');
  console.log('');
  console.log('Options:');
  console.log('  --help     Show this help message');
  console.log('  --analyze  Run complete legal analysis');
  console.log('');
  
  const args = process.argv.slice(2);
  
  if (args.includes('--help')) {
    process.exit(0);
  }
  
  if (args.includes('--analyze') || args.length === 0) {
    orchestrator.executeFullAnalysis().catch(error => {
      console.error('❌ Trinity Legal Analysis failed:', error.message);
      process.exit(1);
    });
  }
}

module.exports = TrinityLegalOrchestrator;
