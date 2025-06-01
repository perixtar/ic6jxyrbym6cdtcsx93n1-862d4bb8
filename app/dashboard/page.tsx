import { Card } from '@/components/ui/card';
import {
  DashboardIcon,
  PersonIcon,
  ReaderIcon,
  LayersIcon,
} from '@radix-ui/react-icons';

export default function DashboardPage() {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      {/* Header */}
      <header className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        <p className='text-gray-500'>Welcome to your dashboard overview</p>
      </header>

      {/* Stats Grid */}
      <div className='grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4'>
        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center'>
            <div className='p-3 bg-blue-100 rounded-full'>
              <DashboardIcon className='w-6 h-6 text-blue-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-600'>Total Views</p>
              <p className='text-2xl font-semibold text-gray-900'>2,450</p>
            </div>
          </div>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center'>
            <div className='p-3 bg-green-100 rounded-full'>
              <PersonIcon className='w-6 h-6 text-green-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-600'>Total Users</p>
              <p className='text-2xl font-semibold text-gray-900'>1,210</p>
            </div>
          </div>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center'>
            <div className='p-3 bg-purple-100 rounded-full'>
              <ReaderIcon className='w-6 h-6 text-purple-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-600'>Total Posts</p>
              <p className='text-2xl font-semibold text-gray-900'>342</p>
            </div>
          </div>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center'>
            <div className='p-3 bg-yellow-100 rounded-full'>
              <LayersIcon className='w-6 h-6 text-yellow-600' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-600'>Categories</p>
              <p className='text-2xl font-semibold text-gray-900'>16</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className='grid gap-6 mb-8 md:grid-cols-2'>
        <Card className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Recent Activity</h2>
          <div className='space-y-4'>
            {[1, 2, 3].map((item) => (
              <div key={item} className='flex items-center py-2 border-b last:border-0'>
                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>New user registration</p>
                  <p className='text-xs text-gray-500'>2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
          <div className='grid gap-4 grid-cols-2'>
            <button className='p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors'>
              Add New Post
            </button>
            <button className='p-4 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors'>
              View Reports
            </button>
            <button className='p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors'>
              Update Profile
            </button>
            <button className='p-4 bg-yellow-50 rounded-lg text-yellow-700 hover:bg-yellow-100 transition-colors'>
              Settings
            </button>
          </div>
        </Card>
      </div>

      {/* Additional Content Section */}
      <Card className='p-6'>
        <h2 className='text-xl font-semibold mb-4'>System Overview</h2>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='p-4 bg-gray-50 rounded-lg'>
            <h3 className='font-medium text-gray-900'>System Status</h3>
            <p className='text-sm text-gray-500'>All systems operational</p>
          </div>
          <div className='p-4 bg-gray-50 rounded-lg'>
            <h3 className='font-medium text-gray-900'>Last Backup</h3>
            <p className='text-sm text-gray-500'>2 hours ago</p>
          </div>
          <div className='p-4 bg-gray-50 rounded-lg'>
            <h3 className='font-medium text-gray-900'>Next Update</h3>
            <p className='text-sm text-gray-500'>Scheduled for tomorrow</p>
          </div>
        </div>
      </Card>
    </div>
  );
}