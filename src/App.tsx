import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { PageLoader } from '@/components/ui/PageLoader'

const Home = lazy(() =>
  import('@/pages/Home/Home').then((m) => ({ default: m.Home })),
)
const About = lazy(() =>
  import('@/pages/About/About').then((m) => ({ default: m.About })),
)
const Skills = lazy(() =>
  import('@/pages/Skills/Skills').then((m) => ({ default: m.Skills })),
)
const Projects = lazy(() =>
  import('@/pages/Projects/Projects').then((m) => ({ default: m.Projects })),
)
const NyayaSathi = lazy(() =>
  import('@/projects/NyayaSathi/NyayaSathi').then((m) => ({ default: m.NyayaSathi })),
)
const SimSwap = lazy(() =>
  import('@/projects/SimSwap/SimSwap').then((m) => ({ default: m.SimSwap })),
)
const BrainTumor = lazy(() =>
  import('@/projects/BrainTumor/BrainTumor').then((m) => ({ default: m.BrainTumor })),
)
const Experience = lazy(() =>
  import('@/pages/Experience/Experience').then((m) => ({ default: m.Experience })),
)
const Education = lazy(() =>
  import('@/pages/Education/Education').then((m) => ({ default: m.Education })),
)
const Achievements = lazy(() =>
  import('@/pages/Achievements/Achievements').then((m) => ({ default: m.Achievements })),
)
const Contact = lazy(() =>
  import('@/pages/Contact/Contact').then((m) => ({ default: m.Contact })),
)
const NotFound = lazy(() =>
  import('@/pages/NotFound/NotFound').then((m) => ({ default: m.NotFound })),
)

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/nyaya-sathi" element={<NyayaSathi />} />
            <Route path="/projects/sim-swap" element={<SimSwap />} />
            <Route path="/projects/brain-tumor-detection" element={<BrainTumor />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}