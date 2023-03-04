import Header from '../components/header'
import PartOne from '../components/part1'
import Part2 from '../components/part2'
import Part3 from '../components/part3'
import Part4 from '../components/part4'
export default function Home() {
  return (
    <>
      <Header className="overflow-x-hidden"/>
      <PartOne />
      <Part3 />
      <Part4 />
    </>
  )
}
