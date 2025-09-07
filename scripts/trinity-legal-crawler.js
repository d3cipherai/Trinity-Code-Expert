#!/usr/bin/env node
// 🤖 Trinity Legal Document Crawler
// Crawls and downloads Microsoft legal documents for analysis

const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

class TrinityLegalCrawler {
  constructor() {
    this.legalDocs = [];
    this.outputDir = './legal-analysis/documents';
    this.microsoftLegalUrls = [
      'https://privacy.microsoft.com/en-us/privacystatement',
      'https://azure.microsoft.com/en-us/support/legal/',
      'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service',
      'https://code.visualstudio.com/license',
      'https://docs.microsoft.com/en-us/graph/terms-of-use-api',
      'https://developer.microsoft.com/en-us/microsoft-teams/app-development-resources',
      'https://github.com/features/copilot/terms',
      'https://www.microsoft.com/en-us/servicesagreement',
      'https://docs.microsoft.com/en-us/legal/cognitive-services/speech-service/speech-to-text/data-privacy-security-speech-to-text'
    ];
  }

  async crawlMicrosoftLegal() {
    console.log('🕷️ Trinity Legal Crawler activated...');
    console.log(`📂 Output directory: ${this.outputDir}`);
    
    // Ensure output directory exists
    await this.ensureDirectoryExists(this.outputDir);
    
    for (const url of this.microsoftLegalUrls) {
      await this.crawlDocument(url);
    }
    
    await this.generateCrawlReport();
  }

  async ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  async crawlDocument(url) {
    try {
      console.log(`🔍 Crawling: ${url}`);
      
      const content = await this.fetchDocument(url);
      const filename = this.generateFilename(url);
      const filepath = path.join(this.outputDir, filename);
      
      fs.writeFileSync(filepath, content);
      
      this.legalDocs.push({
        url,
        filename,
        filepath,
        crawledAt: new Date().toISOString(),
        size: content.length,
        wordCount: this.estimateWordCount(content)
      });
      
      console.log(`✅ Saved: ${filename} (${content.length} chars)`);
      
    } catch (error) {
      console.error(`❌ Failed to crawl ${url}:`, error.message);
    }
  }

  async fetchDocument(url) {
    return new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          resolve(data);
        });
      });
      
      request.on('error', (error) => {
        reject(error);
      });
      
      request.setTimeout(10000, () => {
        request.abort();
        reject(new Error('Request timeout'));
      });
    });
  }

  generateFilename(url) {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.replace(/\./g, '_');
    const pathname = urlObj.pathname.replace(/[\/\\:*?"<>|]/g, '_');
    return `${hostname}${pathname}.html`;
  }

  estimateWordCount(content) {
    // Remove HTML tags and count words
    const textOnly = content.replace(/<[^>]*>/g, ' ');
    const words = textOnly.split(/\s+/).filter(word => word.length > 0);
    return words.length;
  }

  async generateCrawlReport() {
    const report = {
      crawledAt: new Date().toISOString(),
      totalDocuments: this.legalDocs.length,
      totalCharacters: this.legalDocs.reduce((sum, doc) => sum + doc.size, 0),
      totalWords: this.legalDocs.reduce((sum, doc) => sum + doc.wordCount, 0),
      documents: this.legalDocs
    };
    
    const reportPath = path.join(this.outputDir, 'crawl-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n🧠 ═══════════════════════════════════════════════════════');
    console.log('✨           TRINITY LEGAL CRAWL COMPLETE             ✨');
    console.log('═══════════════════════════════════════════════════════\n');
    
    console.log(`📊 DOCUMENTS CRAWLED: ${report.totalDocuments}`);
    console.log(`📝 TOTAL WORDS: ${report.totalWords.toLocaleString()}`);
    console.log(`💾 TOTAL SIZE: ${(report.totalCharacters / 1024 / 1024).toFixed(2)} MB`);
    
    console.log('\n📂 DOCUMENTS:');
    this.legalDocs.forEach(doc => {
      console.log(`   📄 ${doc.filename} (${doc.wordCount.toLocaleString()} words)`);
    });
    
    console.log(`\n📋 Report saved: ${reportPath}`);
    console.log('🚀 Ready for Trinity Legal Analysis!');
  }
}

// Execute the crawler
const crawler = new TrinityLegalCrawler();
crawler.crawlMicrosoftLegal().catch(console.error);
