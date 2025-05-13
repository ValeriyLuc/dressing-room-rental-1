
interface StatisticItemProps {
  value: string;
  label: string;
}

/**
 * Компонент с секцией статистики проектов
 */
const StatisticsSection = ({ statistics }: { statistics: StatisticItemProps[] }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
