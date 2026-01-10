'use client'

import { Button } from "@/components/ui/button";

export const CurriculumVitae = () => {
    return (
        <Button
            size="lg"
            className="bg-gradient-to-r from-gray-600 to-black-600 hover:from-white hover:to-gray-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open('/Autor, Christian Kyle__Curriculum Vitae.pdf', '_blank')}
        >
            My Curriculum Vitae
        </Button>
    );
}