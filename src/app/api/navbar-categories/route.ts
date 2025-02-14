import { NextResponse } from 'next/server';
import connectDB from '@/app/config/db';
import NavbarCategory from '@/app/models/NavbarCategory';

// GET all categories
export async function GET() {
    try {
        await connectDB();
        const categories = await NavbarCategory.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// POST new category
export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json();
        
        // Create slug from name
        const slug = body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        // Get highest order number
        const lastCategory = await NavbarCategory.findOne({}).sort({ order: -1 });
        const order = lastCategory ? lastCategory.order + 1 : 1;
        
        const category = await NavbarCategory.create({
            ...body,
            slug,
            order
        });
        
        return NextResponse.json(category, { status: 201 });
    } catch (error: any) {
        console.error('Error creating category:', error);
        if (error.code === 11000) {
            return NextResponse.json({ error: 'Category name already exists' }, { status: 400 });
        }
        return NextResponse.json(
            { error: error.message || 'Failed to create category' },
            { status: 500 }
        );
    }
} 