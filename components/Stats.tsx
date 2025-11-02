import React from 'react';
import { NumberTicker } from './ui/number-ticker';
import { MagicCard } from './ui/magic-card';
import { BorderBeam } from './ui/border-beam';

const Stats = () => {
    const stats = [
        { value: 300, suffix: '%', label: 'Lead Generation Increase' },
        { value: 25, suffix: ' hrs', label: 'Saved Per Week on Average' },
        { value: 200, suffix: '%', label: 'Improvement in Mobile Conversions' },
        { value: 100, suffix: '%', label: 'Accuracy in Automated Processes' },
    ];
    
    return (
        <div className="py-16 sm:py-24 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-center text-sm font-semibold tracking-widest text-gray-400 uppercase">SASEK Labs by the Numbers</p>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <MagicCard key={i} gradientFrom="#FF6B35" gradientTo="#1A1A1A" className="p-8 text-center">
                            <BorderBeam colorFrom="#FF6B35" colorTo="#FFFFFF" size={100} duration={6} delay={i * 0.5} />
                            <div className="text-5xl lg:text-6xl font-extrabold text-white flex items-center justify-center">
                                <NumberTicker value={stat.value} />
                                <span>{stat.suffix}</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-400 max-w-[150px] mx-auto">{stat.label}</p>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
