'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Search, AlertCircle, CheckCircle2, Trophy, Award } from 'lucide-react';

interface SearchResult {
  registrationNumber: string;
  rollNumber: string;
  name: string;
  overallRank: number;
  categoryRank: number;
}

export default function HSSSCResultsPage() {
  const [searchType, setSearchType] = useState<'registration' | 'roll'>('registration');
  const [searchValue, setSearchValue] = useState('');
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setIsLoading(true);

    if (!searchValue.trim()) {
      setError('Please enter a valid search value');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `/api/search-results?type=${searchType}&value=${encodeURIComponent(searchValue)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'No results found');
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setResult(data.data);
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CET TEST"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="w-16" /> {/* Spacer */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            HSSC Results Search
          </h1>
          <p className="text-lg text-slate-600">
            Enter your registration number or roll number to check your rank and results
          </p>
        </div>

        {/* Search Card */}
        <Card className="p-8 mb-8 bg-white shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Search Type Selection */}
            <div>
              <Label className="text-base font-semibold text-slate-700 mb-4 block">
                Search By
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSearchType('registration');
                    setSearchValue('');
                    setResult(null);
                    setError('');
                  }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    searchType === 'registration'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="font-semibold text-slate-900">Registration No</p>
                  <p className="text-sm text-slate-600">Recommended</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchType('roll');
                    setSearchValue('');
                    setResult(null);
                    setError('');
                  }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    searchType === 'roll'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="font-semibold text-slate-900">Roll Number</p>
                  <p className="text-sm text-slate-600">Alternative</p>
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="space-y-2">
              <Label htmlFor="search">
                {searchType === 'registration' ? 'Registration Number' : 'Roll Number'}
              </Label>
              <Input
                id="search"
                type="text"
                placeholder={
                  searchType === 'registration'
                    ? 'Enter your registration number'
                    : 'Enter your roll number'
                }
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="h-12 text-base"
                disabled={isLoading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-700 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Search Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Searching...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Results
                </span>
              )}
            </Button>
          </form>
        </Card>

        {/* Result Card */}
        {result && (
          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg animate-in fade-in slide-in-from-bottom-4">
            <div className="space-y-6">
              {/* Success Header */}
              <div className="flex items-center gap-3 pb-6 border-b border-green-200">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-green-600 font-semibold">Result Found</p>
                  <p className="text-lg font-bold text-slate-900">{result.name}</p>
                </div>
              </div>

              {/* Result Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Overall Rank */}
                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Overall Rank</p>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">{result.overallRank}</p>
                </div>

                {/* Category Rank */}
                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Category Rank</p>
                  </div>
                  <p className="text-3xl font-bold text-purple-600">{result.categoryRank}</p>
                </div>
              </div>

              {/* Registration and Roll Details */}
              <div className="bg-white rounded-lg p-6 space-y-4 border border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
                      Registration Number
                    </p>
                    <p className="text-lg font-mono font-bold text-slate-900">
                      {result.registrationNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
                      Roll Number
                    </p>
                    <p className="text-lg font-mono font-bold text-slate-900">
                      {result.rollNumber}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => {
                    setSearchValue('');
                    setResult(null);
                    setError('');
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Search Again
                </Button>
                <Link href="/login" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Login to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )}

        {/* Info Section */}
        <Card className="p-6 bg-white mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Important Information</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Your results are official from the HSSC</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Both registration number and roll number searches are supported</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Once you find your results, login to access your dashboard</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
