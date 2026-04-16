import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface HSSSCResult {
  registrationNumber: string;
  rollNumber: string;
  name: string;
  overallRank: number;
  categoryRank: number;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const searchType = searchParams.get('type'); // 'registration' or 'roll'
    const searchValue = searchParams.get('value');

    if (!searchType || !searchValue) {
      return NextResponse.json(
        { error: 'Missing search parameters' },
        { status: 400 }
      );
    }

    // Read results data
    const filePath = path.join(process.cwd(), 'public', 'hssc-results.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Results data not found. Please run the PDF extraction script first.' },
        { status: 404 }
      );
    }

    const resultsData = fs.readFileSync(filePath, 'utf-8');
    const results: HSSSCResult[] = JSON.parse(resultsData);

    // Search based on type
    let foundResult = null;

    if (searchType === 'registration') {
      foundResult = results.find(r => r.registrationNumber === searchValue);
    } else if (searchType === 'roll') {
      foundResult = results.find(r => r.rollNumber === searchValue);
    }

    if (!foundResult) {
      return NextResponse.json(
        { error: 'No results found for the provided search criteria' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: foundResult });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
