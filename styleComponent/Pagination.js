import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Pagination = ({ totalItems, pageSize, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const currentSliderIndex = Math.floor((currentPage - 1) / 4); // Show 4 pages per slider

  const handleSliderChange = (increment) => {
    const newPage = currentSliderIndex * 4 + increment * 4 + 1;
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  // Calculate the starting and ending page numbers for the current slider
  const startPage = currentSliderIndex * 4 + 1;
  const endPage = Math.min(startPage + 3, totalPages);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', borderWidth: 1.3, padding: 4, borderRadius: 21, borderColor: '#475AD7', marginTop: 14, zIndex: -1 }}>
      {/* Previous Slider Arrow */}
      <TouchableOpacity onPress={() => handleSliderChange(-1)} disabled={currentSliderIndex === 0}>
        <FontAwesome name="chevron-left" size={15} color={currentSliderIndex === 0 ? "#ccc" : "#475AD7"} />
      </TouchableOpacity>

      {/* Page Numbers */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
        <TouchableOpacity
          key={page}
          onPress={() => onPageChange(page)}
          style={{
            // padding: 16,
            width: '11%',
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: currentPage === page ? "#475AD7" : "transparent",
            borderRadius: 35,
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{ color: currentPage == page ? "#fff" : "#000", fontSize: 15 }}
          >{page}</Text>
        </TouchableOpacity>
      ))}

      {/* Next Slider Arrow */}
      <TouchableOpacity onPress={() => handleSliderChange(1)} disabled={currentSliderIndex === Math.floor(totalPages / 4)}>
        <FontAwesome name="chevron-right" size={15} color={currentSliderIndex === Math.floor(totalPages / 4) ? "#ccc" : "#475AD7"} />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
