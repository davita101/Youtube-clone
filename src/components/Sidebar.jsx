import { Stack } from '@mui/material'

import { categories } from '../utils/constants'

const selectCategory = 'New'

const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95' },
            flexDirection: { md: 'column' }
        }}>
        {categories.map((category) => (
            <button
                className={` category-btn
                bg-[${category.name === 'New' && '#FC1503'}] text-white`}
                key={category.name}
            >
                <span
                    className={`text-[${category.name === selectCategory ?
                        'white' : 'red'}] mr-[10px]`}
                >
                    {category.icon}
                </span>
                <span
                    className={`${category.name === selectCategory ?
                        'opacity-[1]' : 'opacity-[0.8]'}`}
                >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
)


export default Sidebar